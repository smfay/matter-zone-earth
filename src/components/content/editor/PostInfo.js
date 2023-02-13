import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import { contains } from '@firebase/util';
import CardEditorPreview from './CardEditorPreview';

export default function PostInfo() {
    const [text, setText] = useState('')
    const [textOutput, setTextOutput] = useState('')
    const [title, setTitle] = useState('')
    const [mainImage, setMainImage] = useState()
    const [imagePreview, setImagePreview] = useState('')

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
            </main>
        </>
    );
}