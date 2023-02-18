import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import { arrayMoveImmutable } from 'array-move';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Editor, { CustomToolbar } from './Editor';

import uuid from 'react-uuid';

const blockList = [];

const BlockTools = () => {
    const [blocks, updateBlocks] = useState(blockList)
    const [focusedIndex, setFocusedIndex] = useState()
    const [focusedId, setFocusedId] = useState(``)
    const [postText, setPostText] = useState()

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
        // let nodeList = blockNodes;
        // const [nodes, updateNodes] = useState([])
        const blockId = id;

        function blockMoveDown(oldIndex) {
            const newIndex = oldIndex + 1
            const items = Array.from(blocks);
            const [reorderedItem] = items.splice(oldIndex, 1);
            items.splice(newIndex, 0, reorderedItem);
            updateBlocks(items)
        }

        function blockMoveUp(oldIndex) {

            if (oldIndex != 0) {
                const newIndex = oldIndex - 1
                const items = Array.from(blocks);
                const [reorderedItem] = items.splice(oldIndex, 1);
                items.splice(newIndex, 0, reorderedItem);
                updateBlocks(items)
            }
        }

        function addNode(blockIndex, blockNodes) {
            const myId = uuid();
            const newNode = { id: `${myId}` }
            updateBlockTree(id, [...blockNodes, newNode])
            console.log("node array", [...blockNodes, newNode])
            console.log("\n BLOCKS:", blocks, "\n BLOCK ID:", blockId, "\n NODES:", blockNodes)
        };

        function handleOnDragEnd(result) {
            const items = Array.from(blockNodes);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            updateBlockTree(id, items)
        }

        const Node = ({ id, index }) => {

            return (
                <div className='node flex text-xs p-2 bg-zinc-500 border-theme border-black w-full rounded grow hover:bg-zinc-400 hover:drop-shadow-lift-hard'>{id}</div>
            )
        }

        return (
            <>
                <section className='blockwrapper overflow-hidden'>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId='nodes-droppable' direction="horizontal">
                            {(provided) => (
                                <ul className='blocknodes h-full w-full flex' {...provided.droppableProps} ref={provided.innerRef}>
                                    {blockNodes.map(({ id }, index) => {
                                        return (
                                            <Draggable key={id + index} draggableId={id + index} index={index} className=''>
                                                {(provided) => (
                                                    <li key={index + id} className={`draggable w-full flex m-[0.1em]`}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                        <Node blockId id={id} index={index} className="" />
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
                        <button onClick={() => addNode(index, blockNodes)}  >+</button>
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
                                <span className='text-xl'>{id}</span>
                                <li className='flex' >
                                    <Block id={id} index={index} blockNodes={[...nodes]} className="" />
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <span className='flex w-full justify-center text-center mt-4'>
                    <button onClick={() => addBlock()} className='hover:bg-zinc-300 rounded-full w-12 h-12 border-theme border-black text-2xl align-middle' >+</button>
                </span>
            </main>
        </>
    )
}

export default BlockTools