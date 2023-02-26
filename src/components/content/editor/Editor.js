import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'quill-paste-smart';
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import parse, { attributesToProps } from 'html-react-parser';
import CardEditorPreview from './CardEditorPreview';
import { contains } from '@firebase/util';
import { useMemo } from 'react';

const InsertContainerButton = () => <span className='flex justify-center border-dashed border-theme rounded border-black text-sm text-black items-center align-middle justify-center content-start p-2 hover:bg-zinc-400 w-fit h-fit place-self-end align-middle'></span>;
const InsertContainerColumnButton = () => <span className='flex justify-center border-theme rounded border-black text-sm text-black items-center align-middle justify-center content-start p-2 hover:bg-zinc-400 w-fit h-fit place-self-end align-middle'></span>;
console.log(Quill)

const Container = () => <span className='bg-black w-full'></span>;

function insertHr() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertEmbed(cursorPosition, "hr", "null")
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
            <button className='ql-hr text-black text-sm font-semibold' >hr</button>
        </div>
    )
}

export const Editor = ({ editor, html, textData, node, selection }) => {
    const [text, setText] = useState(html)
    const [mountEditor, setMountEditor] = useState(false)

    var Embed = Quill.import('blots/block/embed');
    class Hr extends Embed {
        static create(value) {
            let node = super.create(value);
            // give it some margin
            // node.setAttribute('style', "height:0px; margin-top:10px; margin-bottom:10px; color:black;");
            return node;
        }
    }

    Hr.blotName = 'hr'; //now you can use .ql-hr classname in your toolbar
    Hr.className = 'my-hr';
    Hr.tagName = 'hr';

    Quill.register({
        'formats/hr': Hr
    });

    useEffect(() => {
        if (!mountEditor) {
            setMountEditor(true);
        }
    }, [])


    function handleChange(value) {
        setText(value)
        textData(value, node)
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
        "hr",
        "container",
        "section",
        "link",
        "image",
        "color"
    ];


    const modules = useMemo(() => ({
        clipboard: {
            allowed: {
                tags: ['a', 'b', 'strong', 'u', 's', 'i', 'p', 'br', 'ul', 'ol', 'li', 'hr', 'section', 'Container', 'div', 'span'],
                attributes: ['href', 'rel', 'target', 'class', 'className']
            },
            substituteBlockElements: true,
        },
        toolbar: {
            container: '#toolbar',
            handlers: {
                'hr': insertHr
            }
        },

    }), []);


    return (
        <>
            <ReactQuill theme='snow' className='w-full rounded editor-input' value={text}
                onChange={(e) => { handleChange(e) }}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder='Type Something'
            />
            {/* <p>{text}</p> */}
        </>
    )
}

export default Editor;