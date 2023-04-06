import React, { useState, useRef, useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import parse, { attributesToProps } from 'html-react-parser';
import { contains } from '@firebase/util';
import CardEditorPreview from './CardEditorPreview';
import BlockToolsIcon from '../../../assets/svg/icons/BlockToolsIcon';
import Resizer from "react-image-file-resizer";

export default function PostInfo(props) {
    const [text, setText] = useState('')
    const [textOutput, setTextOutput] = useState('')
    const [title, setTitle] = useState('Title of the post')
    const [mainImage, setMainImage] = useState()
    const [imagePreview, setImagePreview] = useState('')

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                1024,
                1024,
                "PNG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                    props.changeBgImage(uri);
                },
                "base64"
            );
        });

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
            resizeFile(file)
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
            <main className='' >
                <header className='flex justify-between w-full h-full gap-2 items-center pb-4'>
                    <h1 className='text-2xl text-right font-semibold text-black'>BlockTools</h1>
                    <section className='flex h-full gap-1'>
                        <div style={{ backgroundColor: props.colors.darkMuted }} className='palettecolor' />
                        <div style={{ backgroundColor: props.colors.darkVibrant }} className='palettecolor' />
                        <div style={{ backgroundColor: props.colors.muted }} className='palettecolor' />
                        <div style={{ backgroundColor: props.colors.vibrant }} className='palettecolor' />
                        <div style={{ backgroundColor: props.colors.lightMuted }} className='palettecolor' />
                        <div style={{ backgroundColor: props.colors.lightVibrant }} className='palettecolor' />
                    </section>

                    {/* <BlockToolsIcon className='text-zinc-300 bg-zinc-300 h-10 rounded border-theme border-black ' /> */}
                </header>
                <section className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1 lg:h-60'>
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
                {/* <h2 className='mt-4 text-black font-light text-base'>{title}</h2> */}
            </main>
        </>
    );
}