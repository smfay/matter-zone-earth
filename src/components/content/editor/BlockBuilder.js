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

    const Block = ({ id }) => {
        const [blockColumns, setBlockColumns] = useState(1);
        const [focused, setFocused] = useState(false);
        const editor = useRef();

        useEffect(() => {
            if (focusedIndex != id) {
                handleBlur()
            }
        }, [setFocusedIndex])


        function handleFocus() {
            setFocusedIndex(id)
            setFocused(true)
            console.log(focused)
        }

        function handleBlur() {
            setFocused(false)
            console.log(focused)
        }

        return (
            <div id={id} className='block min-h-[5em] p-4'>
                <div className='blocktools flex justify-end'>
                    <button className=''>{id}</button>
                    <button onClick={handleFocus} className=''>#</button>
                </div>

                {focused &&
                    <>
                        <div className='' id='editor' >
                            <div id='toolbar'>
                                <CustomToolbar />
                            </div>
                            <div >
                                <Editor className='text-editor' />
                            </div>
                        </div>
                    </>
                }
            </div >

        );
    };

    function addBlock() {
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
                                            <li className='py-2'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <Block id={id} />
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