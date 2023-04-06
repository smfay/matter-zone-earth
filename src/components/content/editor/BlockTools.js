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
import DragHandleIcon from '../../../assets/svg/icons/DragHandleIcon';

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

const BlockTools = (props) => {
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
        props.updatePreview(newBlocks)
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
            const newIndex = index + 1
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
            const defaultImageConfig = {
                xFocus: 50,
                yFocus: 50,
                inContainer: true,
                manualWidth: 0
            };
            const newNode = { id: `${myId}`, type: 'none', text: "", editing: false, image: "", imageSource: "", imageConfig: defaultImageConfig }
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

        function configureImage() {

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

        const Node = ({ id, index, type, text, image, imageSource, imageConfig, editing }) => {
            const nodeType = type
            let nodeHtml = text
            let nodeImage = imageSource

            function DeleteNodeButton() {
                return (
                    <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 aspect-square bg-zinc-300 border-theme border-black group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                )
            }

            function EditImageButton() {
                return (
                    <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 aspect-square bg-zinc-300 border-theme border-black group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                )
            }

            function UpdateTextButton() {
                return (
                    <button onClick={() => setNodeType(index, "text", id, nodeHtml, false)} className='h-6 w-6 aspect-square border-theme border-black font-bold text-sm group-hover:p-0 opacity-0 align-top group-hover:opacity-100 hover:bg-blue-600 p-3 rounded-full transition-all ease-in-out duration-200'>-></button>
                )
            }

            function UpdateImageButton() {
                return (
                    <button onClick={() => setNodeType(index, "image", id, nodeHtml, false, image, imageSource)} className='h-6 w-6 aspect-square border-theme border-black font-bold text-sm group-hover:p-0 opacity-0 align-top group-hover:opacity-100 hover:bg-blue-600 p-3 rounded-full transition-all ease-in-out duration-200'>-></button>
                )
            }

            function updateText(newText, nodeIndex) {
                console.log(newText)
                nodeHtml = newText
            }

            if (type == 'none') {
                return (
                    <div className='group node'>
                        <nav className='nodetools group-hover:visible'>
                            <p className='nodetypelabel' >None</p>
                            <DeleteNodeButton />
                        </nav>
                        <div className='flex space-x-2 mt-6'>
                            <button onClick={() => setNodeType(index, "image", id, nodeHtml, editing, image, imageSource)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard' >
                                <ImageIcon />
                            </button>
                            <button onClick={() => setNodeType(index, "text", id, nodeHtml, editing, image, imageSource)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard'>
                                <TextIcon />
                            </button>
                        </div>
                    </div>
                )
            } else if (type == 'image' & imageSource == "") {
                return (
                    <div className='group node'>
                        <nav className='nodetools group-hover:visible'>
                            <p className='nodetypelabel' >Image</p>
                            <DeleteNodeButton />
                        </nav>
                        <form className='w-full mt-6'>
                            <input
                                className='w-full'
                                type="file"
                                accept='image/*'
                                onChange={(e) => handleImageChange(e, index)} >
                            </input>
                        </form>
                    </div>
                )
            } else if (type == 'image' & imageSource != "" & editing == false) {
                return (
                    <div className='group node p-0'>
                        <nav className='nodetools group-hover:visible z-10'>
                            <p className='nodetypelabel' >Image</p>
                            <DeleteNodeButton />
                        </nav>
                        <div className='overflow-hidden h-64 grow rounded relative justify-center items-center'>
                            <div className='absolute w-full h-full items-center pointer-events-none'>
                                <div className='flex items-center justify-center w-full h-full tool p-4'>
                                    <button onClick={() => setNodeType(index, "image", id, nodeHtml, true, image, imageSource)} className='toolbutton rounded-full p-3 aspect-square text-zinc-300 invisible group-hover:visible hover:bg-zinc-300 hover:text-black group-hover:pointer-events-auto z-50'>edit</button>
                                </div>
                            </div>
                            <img className='object-cover w-full h-full group-hover:brightness-[0.2]' src={imageSource} />
                        </div>
                    </div>
                )
            } else if (type == 'image' & imageSource != "" & editing == true) {
                return (
                    <div className='group node p-0'>
                        <nav className='nodetools group-hover:visible z-10'>
                            <p className='nodetypelabel' >Image</p>
                            <UpdateImageButton />
                        </nav>
                        <div className='overflow-hidden h-64 grow rounded relative justify-center items-center'>
                            <div className='absolute w-full h-full items-center'>
                                <div className='flex items-center justify-center w-full h-full tool p-4'>
                                    <div className='z-10 text-zinc-300 w-fit gap-4 p-4 flex flex-col items-left'>
                                        <div className='flex gap-2 justify-between toolbutton'>
                                            <label for="showTitle">In Container</label>
                                            <input type="checkbox" id="showTitle" name="showTitle" />
                                        </div>
                                        {/* <hr></hr> */}
                                        <span className='flex items-center justify-between gap-2'>
                                            <label className='' for="x">X Focus</label>
                                            <input className='range' type="range" id="x" name="x" min="0" max="100" />
                                        </span>
                                        <span className='flex items-center justify-between gap-2'>
                                            <label className='' for="y">Y Focus</label>
                                            <input className='range' type="range" id="y" name="y" min="0" max="100" />
                                        </span>
                                        <span className='flex items-center justify-between gap-2'>
                                            <label className='' for="y">Width </label>
                                            <input className='range' type="range" id="y" name="y" min="0" max="100" />
                                        </span>
                                        <span className='flex items-center justify-end gap-2'>
                                            <button>Reset</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <img className='object-cover w-full h-full brightness-[0.2] ponter-events-auto' src={imageSource} />
                        </div>
                    </div>
                )
            } else if (type == 'text' & editing == false) {
                if (text == '<p><br></p>' | text == '') {
                    return (
                        <div className='group node'>
                            <section className='group' >
                                <nav className='nodetools group-hover:visible'>
                                    <p className='nodetypelabel' >Text</p>
                                    <DeleteNodeButton />
                                </nav>
                                <div onClick={() => setNodeType(index, "text", id, nodeHtml, true)} className='w-full bg-zinc-500 h-full rounded border-theme border-dashed border-black text-center flex p-20 justify-center items-center'>
                                    <button className='h-full w-full' className='' >Click to edit</button>
                                </div>
                            </section>
                        </div>
                    )
                } else {
                    return (
                        <div className='group node'>
                            <section className='group' >
                                <nav className='nodetools group-hover:visible'>
                                    <p className='nodetypelabel' >Text</p>
                                    <DeleteNodeButton />
                                </nav>
                                <button onClick={() => setNodeType(index, "text", id, nodeHtml, true)} className='nodepreview max-h-60 overflow-y-auto' >
                                    {parse(nodeHtml)}
                                </button>
                            </section>
                        </div>
                    )
                }
            } else if (type == 'text' & editing == true) {
                return (
                    <div className='group node w-full'>
                        <section className='group' >
                            <nav className='nodetools group-hover:visible'>
                                <p className='nodetypelabel' >Text</p>
                                <UpdateTextButton />
                            </nav>
                            <section className='mt-4'>
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
                                <ul className='blocknodes space-x-2 w-full flex bg-zinc-500 overflow-x-auto rounded z-20 transition-none' {...provided.droppableProps} ref={provided.innerRef}>
                                    {blockNodes.map(({ id, text, type, editing, image, imageSource }, index) => {
                                        return (
                                            <Draggable key={id + index} draggableId={id + index} index={index} className=''>
                                                {(provided) => (
                                                    <li
                                                        key={index + id}
                                                        className={`draggable flex w-full z-20 min-w-[6em] 
                                                        ${type == "image" && editing == false && blockNodes.length != 0 ? 'w-[40%] grow' : ''}
                                                        ${type == "image" && editing == true ? 'w-full min-w-[16em]' : ''}
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
                    <nav className='relative h-full rounded'>
                        <nav className={`w-12 h-40 ${blockNodes.length == 0 ? 'h-full grow' : 'h-40'}`}>

                            <div className={`hover:drop-shadow-none relative flex flex-col w-full items-center group-hover:w-full rounded-r p-2 gap-2 justify-between border-black border-r-theme border-t-theme border-b-theme text-xl font-semibold text-center transition-all ease-in-out duration-100 ${blockNodes.length == 0 ? 'border-none h-full w-full' : 'h-fit w-full over:bg-zinc-400 drop-shadow-lift-hard bg-zinc-500'}`}>
                                <button className='blockbutton' onClick={() => blockMoveUp(index)} >↑</button>
                                <button className='blockbutton' onClick={() => blockMoveDown(index)} >↓</button>
                                <button className='blockbutton hover:bg-blue-600' onClick={() => addNode(blockNodes)}  >+</button>
                                <button className='blockbutton hover:bg-red-600 p-1' onClick={() => addNode(blockNodes)}  ><CrossIcon /></button>
                            </div>
                        </nav>
                    </nav>
                </section>
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
                                <li className={`flex rounded border-black ${nodes.length == 0 ? 'border-theme border-dashed p-2' : ''}`} >
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