import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import CardEditorPreview from './CardEditorPreview';
import { contains } from '@firebase/util';

const InsertContainerButton = () => <span className='flex justify-center border-dashed border-theme rounded border-black text-sm text-black items-center align-middle justify-center content-start p-2 hover:bg-zinc-400 w-fit h-fit place-self-end align-middle'></span>;
const InsertContainerColumnButton = () => <span className='flex justify-center border-theme rounded border-black text-sm text-black items-center align-middle justify-center content-start p-2 hover:bg-zinc-400 w-fit h-fit place-self-end align-middle'></span>;


const Container = () => <span className='bg-black w-full'></span>;

function insertContainer() {
    const cursorPosition = this.quill.getSelection().index;

    const value = `<div ><br><br></div>`
    const delta = this.quill.clipboard.convert(value)
    this.quill.clipboard.dangerouslyPasteHTML(cursorPosition, value)
}

function insertContainerColumn() {
    const cursorPosition = this.quill.getSelection().index;

    const value = `<section >Column</section>`
    this.quill.clipboard.dangerouslyPasteHTML(cursorPosition, value)
}

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
            <button value="ordered" className="ql-list"></button>
            <button value="bullet" className="ql-list"></button>
            <button value="super" className="ql-script"></button>
            <button value="sub" className="ql-script"></button>
            < select className="ql-align" />
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
        "script",
        "align",
        "list",
        "bullet",
        "indent",
        "div",
        "container",
        "section",
        "link",
        "image",
        "color"
    ];

    const modules = {
        clipboard: {
            allowed: {
                tags: ['a', 'b', 'strong', 'u', 's', 'i', 'p', 'br', 'ul', 'ol', 'li', 'section', 'Container', 'div', 'span'],
                attributes: ['href', 'rel', 'target', 'class', 'className']
            },
            substituteBlockElements: true,
        },
        toolbar: {
            container: '#toolbar',
            handlers: {
                insertContainer: insertContainer,
                insertContainerColumn: insertContainerColumn
            }
        },
    };

    return (
        <>
            <ReactQuill theme='snow' className='w-full rounded editor-input' value={text}
                onChange={(e) => { handleChange(e) }}
                modules={modules}
                formats={formats}
                placeholder='Type Something'
            />
            <div>
                {text}
            </div>
        </>
    )
}

export default Editor;