import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import CardEditorPreview from './CardEditorPreview';
import { contains } from '@firebase/util';

export const CustomToolbar = () => {
    return (
        <div>
            < select className="ql-header" defaultValue={"normal"} onChange={e => e.persist()}>
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="normal" />
            </select >
            <button className="ql-bold">Bold</button>
            <button className="ql-italic"></button>
            <select className="ql-color">
                <option value="red"></option>
                <option value="green"></option>
                <option value="blue"></option>
                <option value="orange"></option>
                <option value="violet"></option>
                <option value="#d0d1d2"></option>
            </select>
        </div>
    )
}

export const Editor = ({ editor }) => {
    const [text, setText] = useState('')
    const [textOutput, setTextOutput] = useState('')
    const [title, setTitle] = useState('')
    const [mainImage, setMainImage] = useState()
    const [imagePreview, setImagePreview] = useState('')
    const editorContainer = document.getElementById('editor')
    const toolbarContainer = document.getElementById('toolbar')

    const [mountEditor, setMountEditor] = useState(false)

    useEffect(() => {
        setMountEditor(true);
    }, [])


    function handleChange(value) {
        setText(value)
    }

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color"
    ];

    const modules = {
        toolbar: {
            container: '#toolbar'
        },
    };

    return (
        <>
            <ReactQuill theme='snow' className='w-full rounded editor-input' value={text}
                // onChange={(e) => { handleChange(e) }}
                modules={modules}
                formats={formats}
                placeholder='Type Something'
            />
        </>
    )
}

export default Editor;