import React, { useState, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";


export default function PostEditor() {
    const [text, setText] = useState('SDFasdfasdf')
    const updatePreview = async (e) => {
        setText(e.target.value)
    }

    function handleChange(value) {
        setText(value)
    }


    return (
        <>
            <div className='bg-zinc-800 p-4 rounded'>
                <ReactQuill theme='snow' className='bg-zinc-900 rounded editor-input' value={text}
                    onChange={(e) => { handleChange(e) }}
                />
            </div>
            <section className='my-4 h-full w-full bg-black text-white'>
                <div className='bg-zinc-800 p-4 rounded preview'>{text}</div>
            </section>
        </>
    );
}