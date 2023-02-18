import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Editor, { CustomToolbar } from './Editor';

const defaultBlocks = [];

const BlockBuilder = () => {
    const [blocks, updateBlocks] = useState(defaultBlocks)
    const [focusedIndex, setFocusedIndex] = useState()
    const [focusedId, setFocusedId] = useState(``)

    const Block = ({ id, index }) => {
        const [blockColumns, setBlockColumns] = useState(1);
        const [focused, setFocused] = useState(false);
        const editor = useRef();

        // useEffect(() => {
        //     if (focusedIndex != index) {
        //         handleBlur()
        //     }
        // }, [setFocusedIndex])


        function handleFocus() {
            setFocusedIndex(index)
            setFocusedId(id)
            setFocused(true)
            console.log(focused)
            console.log(focusedIndex)
            console.log(index)
            console.log(id)
        }

        function handleBlur() {
            setFocused(false)
        }

        return (
            <div id={id} className='blockwrapper min-h-[8em] flex p-1'>
                <div className='blocktools h-fit space-x-2 flex'>
                    <button className=''>ID: {id}</button>
                    <button className=''>ADD COLUMN</button>
                    <button onClick={handleFocus} className=''>EDIT</button>
                </div>
                <section className='blockspace bg-black grid auto-cols-auto'
                >
                    {focusedIndex == index &&
                        <div className='' id='editor' >
                            <div id='toolbar'>
                                <CustomToolbar />
                            </div>
                            <div >
                                <Editor className='text-editor' />
                            </div>
                        </div>
                    }
                </section>
            </div >

        );
    };

    function addBlock() {
        // const

        const items = Array.from(blocks);
        updateBlocks(items.concat({ id: `${items.length}` }))
        console.log(items)
        console.log(blocks)

    };

    function handleOnDragEnd(result) {
        console.log(result)
        const items = Array.from(blocks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateBlocks(items)
        items.map(({ id }, index) => {
            if (id == focusedId) {
                setFocusedIndex(index)
            }
        })
        console.log(items)
    }

    return (
        <>
            <div>BlockBuilder</div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='blocks-droppable'>
                    {(provided) => (
                        <ul className='blocklist' {...provided.droppableProps} ref={provided.innerRef}>
                            {blocks.map(({ id }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li className='p-2 h-full flex flex-col'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Block id={id} index={index} className="h-full flex" />
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
            <button onClick={addBlock}>Add</button>
        </>
    )
}

export default BlockBuilder