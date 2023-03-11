import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import { arrayMoveImmutable } from 'array-move';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import parse, { attributesToProps } from 'html-react-parser';
import Editor, { CustomToolbar } from './Editor';
import Resizer from "react-image-file-resizer";

import uuid from 'react-uuid';
import ImageIcon from '../../../assets/svg/icons/ImageIcon';
import TextIcon from '../../../assets/svg/icons/TextIcon';
import CrossIcon from '../../../assets/svg/icons/CrossIcon';
import EditIcon from '../../../assets/svg/icons/EditIcon';
import SaveIcon from '../../../assets/svg/icons/SaveIcon';

const blockList = [];

const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            512,
            512,
            "PNG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });

const BlockTools = (updatePostPreview) => {
    const [blocks, updateBlocks] = useState(blockList)

    let editingNode = null;

    function handleEditorChange(nodeIndex) {

    }

    function updateBlockTree(blockId, nodeArray) {

        const blockItems = [...blocks];
        let nodeItems = [...nodeArray];
        let newBlocks = blocks.map(block => block.id == blockId ? { ...block, nodes: [...nodeItems] } : block)
        newBlocks.map(block => block.nodes.map(node => node.id == editingNode ? node.editing = true : node.editing = false))
        console.log("new blocks", newBlocks)
        updateBlocks(newBlocks);
    }

    function addBlock() {
        const items = [...blocks];
        const myId = uuid();
        updateBlocks(items.concat(
            {
                id: `${myId}`,
                nodes: [],
            }))
    };

    const Block = ({ id, index, blockNodes }) => {
        const blockId = id;
        const items = [...blocks];

        function blockMoveDown(oldIndex) {
            const newIndex = oldIndex + 1
            const [reorderedItem] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, reorderedItem);
            updateBlocks(items)
        }

        function blockMoveUp(oldIndex) {
            if (oldIndex != 0) {
                const newIndex = index - 1
                // const items = [...blocks];
                const [reorderedItem] = items.splice(oldIndex, 1);
                items.splice(newIndex, 0, reorderedItem);
                updateBlocks(items)
            }
        }

        function addNode(blockNodes) {
            const myId = uuid();
            const newNode = { id: `${myId}`, type: 'none', text: "", editing: false, image: "", imageSource: "" }
            updateBlockTree(id, [...blockNodes, newNode])

            console.log("newNode id", newNode.id)
        };

        function removeNode(blockNodes, nodeIndex) {
            const nodes = [...blockNodes]
            nodes.splice(nodeIndex, 1);
            updateBlockTree(id, [...nodes])
        };

        function setNodeType(nodeIndex, type, id, text, editing, image, imageSource) {
            const nodes = [...blockNodes]
            if (editing) {
                editingNode = id
            }
            if (nodeIndex !== -1) {
                nodes[nodeIndex] = { id: id, type: type, text: text, editing: editing, image: image, imageSource: imageSource }
                updateBlockTree(blockId, [...nodes])
            }
        }

        function handleOnDragEnd(result) {
            const items = [...blockNodes];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            updateBlockTree(id, items)
        }

        const handleImageChange = async (e, nodeIndex) => {
            const items = [...blockNodes];
            const file = e.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
                items[nodeIndex].image = file;
            } else {
                items[nodeIndex].image = null;
            }

            if (file) {
                const img = resizeFile(file);
                items[nodeIndex].imageSource = await img;
                // const reader = new FileReader();
                // reader.onloadend = () => {
                //     items[nodeIndex].imageSource = reader.result;
                // }
                // reader.readAsDataURL(file);
            } else {
                items[nodeIndex].imageSource = "";
            }
            updateBlockTree(id, [...items])
        }

        const Node = ({ id, index, type, text, image, imageSource, editing }) => {
            const nodeType = type
            let nodeHtml = text
            let nodeImage = imageSource

            function updateText(newText, nodeIndex) {
                console.log(newText)
                nodeHtml = newText
            }

            if (type == 'none') {
                return (
                    <div className='group node flex flex-col justify-between h-full p-1 w-full rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <nav className='nodetools group-hover:visible'>
                            <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                        </nav>
                        <div className='flex space-x-2'>
                            <button onClick={() => setNodeType(index, "image", id, nodeHtml, editing, image, imageSource)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard' >
                                <ImageIcon />
                            </button>
                            <button onClick={() => setNodeType(index, "text", id, nodeHtml, editing, image, imageSource)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard'>
                                <TextIcon />
                            </button>
                            <p className='line-clamp-1 w-min' >{type}</p>
                        </div>
                    </div>
                )
            } else if (type == 'image' & imageSource == "") {
                return (
                    <div className='group node flex flex-col justify-between h-full p-1 w-full rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <nav className='nodetools group-hover:visible'>
                            <p>Image</p>
                            <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                        </nav>
                        <form className='w-full'>
                            <input
                                className='w-full'
                                type="file"
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, index)} >
                            </input>
                        </form>
                    </div>
                )
            } else if (type == 'image' & imageSource != "") {
                return (
                    <div className='group node flex flex-col justify-between p-1 rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <nav className='nodetools group-hover:visible'>
                            <p>Image</p>
                            <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                        </nav>
                        <div className='flex overflow-hidden p-2 grow' >
                            <img className='object-cover w-full grow flex border-theme border-black rounded' src={imageSource} />
                        </div>
                    </div>
                )
            } else if (type == 'text' & editing == false) {
                if (text == '<p><br></p>' | text == '') {
                    return (
                        <div className='group node flex flex-col justify-between h-full p-1 w-full rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                            <section className='group' >
                                <nav className='nodetools group-hover:visible'>
                                    <p>Text</p>
                                    <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                                </nav>
                                <div onClick={() => setNodeType(index, "text", id, nodeHtml, true)} className='w-full bg-zinc-500 h-full rounded border-theme border-dashed border-black text-center flex justify-center items-center'>
                                    <button className='' >Click to edit</button>
                                </div>
                            </section>
                        </div>
                    )
                } else {
                    return (
                        <div className='group node flex flex-col justify-between h-full p-1 w-full rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                            <section className='group' >
                                <nav className='nodetools group-hover:visible'>
                                    <p>Text</p>
                                    <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                                </nav>
                                <button onClick={() => setNodeType(index, "text", id, nodeHtml, true)} className='nodepreview h-full' >
                                    {parse(nodeHtml)}
                                </button>
                            </section>
                        </div>
                    )
                }
            } else if (type == 'text' & editing == true) {
                return (
                    <div className='group node flex flex-col justify-between h-full p-1 w-full rounded grow hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <section className='group' >
                            <nav className='nodetools group-hover:visible'>
                                <p>Text</p>
                                <button onClick={() => setNodeType(index, "text", id, nodeHtml, false)} className='h-6 w-6 font-bold text-sm bg-zinc-500 group-hover:p-0 opacity-0 align-top group-hover:opacity-100 hover:bg-blue-600 p-3 rounded-full transition-all ease-in-out duration-200'>-></button>
                            </nav>
                            <section>
                                <div id='editor' >
                                    <div id='toolbar' >
                                        <CustomToolbar />
                                    </div>
                                    <Editor node={index} html={nodeHtml} textData={(newText, node) => updateText(newText, node)} />
                                </div>
                            </section>
                            {/* <p>{nodeHtml}</p> */}
                        </section>
                    </div >
                )
            }
        }

        return (
            <>
                <section className='blockwrapper'>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId='nodes-droppable' direction="horizontal">
                            {(provided) => (
                                <ul className='blocknodes space-x-2 w-full flex' {...provided.droppableProps} ref={provided.innerRef}>
                                    {blockNodes.map(({ id, text, type, editing, image, imageSource }, index) => {
                                        return (
                                            <Draggable key={id + index} draggableId={id + index} index={index} className=''>
                                                {(provided) => (
                                                    <li
                                                        key={index + id}
                                                        className={`draggable flex
                                                        ${(type == "text" | [...blockNodes].length == 1) ? 'w-full' : ''} 
                                                        ${(type == "image" && [...blockNodes].length == 1) ? 'max-h-96' : ''}
                                                        ${(type == "image" && [...blockNodes].length == 2) ? 'w-full max-w-fit' : ''}
                                                        `}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef} >
                                                        <Node blockId id={id} index={index} text={text} type={type} editing={editing} image={image} imageSource={imageSource} className="" />
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </section>
                <nav className='flex h-full rounded'>
                    <div className='flex bg-zinc-500 flex-col h-full hover:drop-shadow-lift-hard  p-1 border-theme border-black rounded gap-2 justify-between ml-2 text-xl font-semibold text-center'>
                        <button className='blockbutton' onClick={() => blockMoveUp(index)} >↑</button>
                        <button className='blockbutton' onClick={() => blockMoveDown(index)} >↓</button>
                        <button className='blockbutton' onClick={() => addNode(blockNodes)}  >+</button>
                        <button className='blockbutton bg-red-600 rounded-full p-1' onClick={() => addNode(blockNodes)}  ><CrossIcon /></button>
                    </div>
                </nav>
            </>
        )
    }

    return (
        <>
            <main className='pt-4'>
                <ul className='flex flex-col space-y-2'>
                    {blocks && blocks.map(({ id, nodes }, index) => {
                        return (
                            <div key={id} >
                                {/* <span className='text-xs'>{id}</span> */}
                                <li className='flex bg-zinc-500 rounded p-2 border-theme border-black border-dashed bg-zinc-600' >
                                    <Block id={id} index={index} blockNodes={[...nodes]} className="" />
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <span className='group hover:bg-zinc-600 flex w-full justify-center text-center border-theme border-black p-2 rounded border-dashed mt-4'>
                    <button onClick={() => addBlock()} className='hover:bg-zinc-300 rounded-full w-12 h-12 border-theme border-black text-2xl align-middle' >+</button>
                </span>
            </main>
        </>
    )
}

export default BlockTools