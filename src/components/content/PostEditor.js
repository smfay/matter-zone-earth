import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import CardEditorPreview from './CardEditorPreview';
import { contains } from '@firebase/util';


export default function PostEditor() {
    const [text, setText] = useState('')
    const [textOutput, setTextOutput] = useState('')
    const [title, setTitle] = useState('')
    const [mainImage, setMainImage] = useState()
    const [imagePreview, setImagePreview] = useState('')

    const CustomToolbar = () => (
        <div id="toolbar" className='ql-toolbar'>
            <select className="ql-header text-black" defaultValue={""} onChange={e => e.persist()}>
                <option value="1" name="Heading1" />
                <option value="2" />
                <option selected />
            </select>
            <button className="ql-bold" />
            <button className="ql-italic" />
        </div>
    );


    function insertSpan() {
        const value = `<span></span>`
        const delta = Quill.clipboard.convert(value)
        const cursorPosition = Quill.getSelection().index;
        Quill.setContents(delta, 'silent')
        Quill.setSelection(cursorPosition + 1);
    }

    // const modules = {
    //     toolbar: {
    //         [container: "#toolbar"]
    //         [{ header: [1, 2, 3, false], font: [], size: [] }],
    //         ["bold", "italic", "underline", "strike", "blockquote"],
    //         ["link", "image"],
    //         [{ 'align': [] }],
    //     ,
    // }



    const modules = {
        toolbar: {
            container: "#toolbar",
        },
    };

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

    const updatePreview = async (e) => {
        setText(e.target.value)
    }

    function styleInsert(string) {
        let input = ""
        input = string;
        let result = input
        setTextOutput(result)
    }

    function handleChange(value) {
        styleInsert(value)
        setText(value)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
            setMainImage(file)
        } else {
            setMainImage(null)
        }

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null)
        }
    }

    function Thumbnail({ title, imagePreview }) {
        return (
            <CardEditorPreview title={title} image={imagePreview} className="flex" />
        )
    }


    return (
        <>
            <main className='space-y-2 p-2'>
                <h1 className='text-2xl text-right text-zinc-500  font-semibold'>Post Editor</h1>
                <section className='flex flex-col md:flex-row h-fit'>
                    <form className='flex flex-col p-4 w-full md:w-1/3 rounded space-y-2'>
                        {/* <label value={title} for='title'>Title:</label> */}
                        <input onChange={handleTitleChange} type='text' name='title' id='title' placeholder='Enter a post title' />
                        {/* <label for='mainImage'>Main Image:</label> */}
                        <input
                            accept='image/*'
                            onChange={handleImageChange}
                            type='file' name='mainImage'
                            id='mainImage'
                            placeholder='Enter a post title' />
                        <img className='w-32 h-32 object-cover' src={imagePreview} />
                    </form>
                    <div className='w-full h-full'>
                        <CardEditorPreview title={title} image={imagePreview} className="flex" />
                    </div>
                </section>
                <main className='w-full h-full flex flex-col md:flex-row mb-96'>
                    <div className='rounded p-2 md:w-1/3'>
                        <h1 className='font-light w-full text-sm text-zinc-500 mb-6 text-right p-2 rounded' >EDITOR</h1>
                        <div id='editor'>
                            <CustomToolbar />
                            <ReactQuill theme='snow' className='w-full bg-black rounded editor-input' value={text}
                                onChange={(e) => { handleChange(e) }}
                                modules={modules}
                                formats={formats}
                            />
                        </div>
                    </div>
                    <div className='rounded w-full md:w-2/3 p-2'>
                        <h1 className='font-LIGHT text-sm text-zinc-500 mb-6 text-right p-2 rounded' >PREVIEW</h1>
                        <section className='post-preview'>
                            <h1>{title}</h1>
                            <div className='rounded preview'>{parse(textOutput)}</div>
                            <div className='break-words rounded text-xs m-12'>{textOutput}</div>
                        </section>
                    </div>
                </main>
            </main>
        </>
    );
}