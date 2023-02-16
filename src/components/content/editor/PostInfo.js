import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import { contains } from '@firebase/util';
import CardEditorPreview from './CardEditorPreview';

export default function PostInfo() {
    const [text, setText] = useState('')
    const [textOutput, setTextOutput] = useState('')
    const [title, setTitle] = useState('Title of the post')
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
            <main className=''>
                <h1 className='text-4xl text-right text-black font-semibold'>Editor</h1>
                <section className='grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:h-60'>
                    <form className='flex flex-col rounded space-y-2 h-min'>
                        {/* <label value={title} for='title'>Title:</label> */}
                        <input onChange={handleTitleChange} type='text' name='title' id='title' value={title} placeholder='Enter a post title' />
                        {/* <label for='mainImage'>Main Image:</label> */}
                        <input
                            accept='image/*'
                            onChange={handleImageChange}
                            type='file' name='mainImage'
                            id='mainImage'
                            placeholder='Enter a post title' />
                        <div className='flex bg-zinc-600 bg-main overflow-hidden h-40 rounded border-theme border-black'>
                            <img className='flex object-cover w-full h-full' src={imagePreview} />
                        </div>
                    </form>
                    <CardEditorPreview title={title} image={imagePreview} />
                </section>
            </main>
        </>
    );
}