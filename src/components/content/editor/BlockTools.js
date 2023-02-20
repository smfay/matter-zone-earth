import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import { arrayMoveImmutable } from 'array-move';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Editor, { CustomToolbar } from './Editor';

import uuid from 'react-uuid';
import ImageIcon from '../../../assets/svg/icons/ImageIcon';
import TextIcon from '../../../assets/svg/icons/TextIcon';
import CrossIcon from '../../../assets/svg/icons/CrossIcon';
import EditIcon from '../../../assets/svg/icons/EditIcon';

const blockList = [];

const BlockTools = () => {
    const [blocks, updateBlocks] = useState(blockList)
    const [focusedIndex, setFocusedIndex] = useState()
    const [focusedId, setFocusedId] = useState(``)
    const [postText, setPostText] = useState()

    function handleEditorChange(nodeIndex) {

    }

    function updateBlockTree(blockId, nodeArray) {
        console.log("hello", nodeArray)
        const blockItems = [...blocks];
        const newBlocks = blocks.map(block => block.id == blockId ? { ...block, nodes: [...nodeArray] } : block)
        console.log("new blocks", newBlocks)
        updateBlocks(newBlocks);
    }

    function addBlock() {
        const items = Array.from(blocks);
        const myId = uuid();
        updateBlocks(items.concat(
            {
                id: `${myId}`,
                nodes: [],
            }))
    };

    const Block = ({ id, index, blockNodes }) => {
        const blockId = id;

        function blockMoveDown(oldIndex) {
            const newIndex = oldIndex + 1
            const items = [...blocks];
            const [reorderedItem] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, reorderedItem);
            updateBlocks(items)
        }

        function blockMoveUp(oldIndex) {

            if (oldIndex != 0) {
                const newIndex = oldIndex - 1
                const items = [...blocks];
                const [reorderedItem] = items.splice(oldIndex, 1);
                items.splice(newIndex, 0, reorderedItem);
                updateBlocks(items)
            }
        }

        function addNode(blockNodes) {
            const myId = uuid();
            const newNode = { id: `${myId}`, type: 'none', text: "", editing: false }
            updateBlockTree(id, [...blockNodes, newNode])

            console.log("newNode id", newNode.id)
        };

        function removeNode(blockNodes, nodeIndex) {
            const nodes = [...blockNodes]
            nodes.splice(nodeIndex, 1);
            updateBlockTree(id, [...nodes])
        };

        function setNodeType(nodeIndex, type, id, text, editing) {
            const nodes = [...blockNodes]
            if (nodeIndex !== -1) {
                nodes[nodeIndex] = { id: id, type: type, text: text, editing: editing }
                updateBlockTree(blockId, [...nodes])
            }
        }
        function setNodeEditing(nodeIndex, type, id, text, editing) {
            const nodes = [...blockNodes]
            if (nodeIndex !== -1) {
                nodes[nodeIndex] = { id: id, type: type, text: text, editing: editing }
                updateBlockTree(blockId, [...nodes])
            }
        }

        function handleOnDragEnd(result) {
            const items = [...blockNodes];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            updateBlockTree(id, items)
        }

        const Node = ({ id, index, type, text, editing }) => {
            const nodeType = type
            const html = text

            if (type == 'none') {
                return (
                    <div className='group node flex flex-col justify-between h-full p-1 bg-zinc-500 border-theme border-black w-full rounded grow hover:bg-zinc-400 hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <nav className='w-full text-right invisible group-hover:visible transition-all ease-in-out duration-100'>
                            <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                        </nav>
                        <div className='flex space-x-2'>
                            <button onClick={() => setNodeType(index, "image", id, text, editing)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard' >
                                <ImageIcon />
                            </button>
                            <button onClick={() => setNodeType(index, "text", id, text, editing)} className='h-6 w-6 bg-zinc-500 hover:bg-zinc-300 rounded border-theme border-black drop-shadow-lift-hard'>
                                <TextIcon />
                            </button>
                            <p className='line-clamp-1 w-min' >{type}</p>
                        </div>
                    </div>
                )
            } else if (type == 'image') {
                return (
                    <div className='group node flex flex-col justify-between h-full p-1 bg-zinc-500 border-theme border-black w-full rounded grow hover:bg-zinc-400 hover:drop-shadow-lift-hard transition-all ease-in-out duration-100'>
                        <nav className='w-full text-right invisible group-hover:visible transition-all ease-in-out duration-100'>
                            <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                        </nav>
                        image
                    </div>
                )
            } else if (type == 'text' & editing == false) {
                return (
                    <div className='node'>
                        <section className='group' >
                            <nav className='w-full text-right invisible group-hover:visible transition-all ease-in-out duration-100'>
                                <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                            </nav>
                            <div className='w-full h-full rounded border-theme border-dashed border-black text-center flex justify-center items-center'>
                                <button onClick={() => setNodeType(index, "text", id, text, true)} className='' >Click to edit</button>
                            </div>
                            <section>
                                <div id='editor' >
                                    <div id='toolbar' >
                                        <CustomToolbar />
                                    </div>
                                    <Editor />
                                </div>
                            </section>
                        </section>
                    </div>
                )
            } else if (type == 'text' & editing == true) {
                return (
                    <div className='node'>
                        <section className='group' >
                            <nav className='w-full text-right invisible group-hover:visible transition-all ease-in-out duration-100'>
                                <button onClick={() => removeNode(blockNodes, index)} className='h-6 w-6 bg-zinc-500 group-hover:p-1 group-hover:rotate-90 opacity-0 group-hover:opacity-100 hover:bg-red-600 p-3 rounded-full transition-all ease-in-out duration-200'><CrossIcon /></button>
                            </nav>
                            <section>
                                <div id='editor' >
                                    <div id='toolbar' >
                                        <CustomToolbar />
                                    </div>
                                    <Editor />
                                </div>
                            </section>
                        </section>
                    </div>
                )
            }
        }

        return (
            <>
                <section className='blockwrapper overflow-hidden'>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId='nodes-droppable' direction="horizontal">
                            {(provided) => (
                                <ul className='blocknodes h-full w-full flex' {...provided.droppableProps} ref={provided.innerRef}>
                                    {blockNodes.map(({ id, text, type, editing }, index) => {
                                        return (
                                            <Draggable key={id + index} draggableId={id + index} index={index} className=''>
                                                {(provided) => (
                                                    <li key={index + id} className={`draggable ${!editing ? 'w-1/2' : 'w-full'} w-full flex m-[0.1em]`}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                        <Node blockId id={id} index={index} text={text} type={type} editing={editing} className="" />
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
                <nav className='ml-4 flex h-full right-0 bg-zinc-500 border-theme border-black rounded'>
                    <div className='flex flex-col h-full space-y-2 justify-between p-2 text-center'>
                        <button onClick={() => blockMoveUp(index)} >↑</button>
                        <button onClick={() => blockMoveDown(index)} >↓</button>
                        <button onClick={() => addNode(blockNodes)}  >+</button>
                    </div>
                </nav>
            </>
        )
    }

    return (
        <>
            <div className='text-3xl font-semibold'>BlockTools</div>
            <main>
                <ul className='flex flex-col'>
                    {blocks && blocks.map(({ id, nodes }, index) => {
                        return (
                            <div key={id} >
                                <span className='text-xs'>{id}</span>
                                <li className='flex' >
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