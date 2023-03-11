import React, { useState, useEffect } from 'react'
import BlockBuilder from '../components/content/editor/BlockBuilder'
import BlockTools from '../components/content/editor/BlockTools'
import { CustomToolbar, Editor } from '../components/content/editor/Editor'
import PostInfo from '../components/content/editor/PostInfo'
import { usePalette } from 'react-palette'
import PostPreview from '../components/content/editor/PostPreview'

export default function CreatePost() {
    const [mountEditor, setMountEditor] = useState(false)
    const [bgImage, setBgImage] = useState('')
    const { data, loading, error } = usePalette(bgImage)

    let blockTree = [];

    function blocksToPost(blocks) {
        const editorBlocks = [...blocks]
        blockTree = editorBlocks;
    }

    const updateBg = (img) => {
        setBgImage(img)
        console.log(img)
    }

    useEffect(() => {
        setMountEditor(true);
    }, [])

    return (
        <>
            <main className={`bg-main border-t-theme border-black w-full justify-center min-h-screen p-4 md:px-12 lg:px-32`}
            >
                <section className="bg-zinc-500 rounded p-4 border-theme border-black">
                    <div className='text-zinc-300 rounded'>
                        <PostInfo changeBgImage={updateBg} colors={data} />
                    </div>
                    <div className='rounded flex flex-col w-full h-full' >
                        <BlockTools />
                    </div>
                    {/* <section>
                        <div id='editor' >
                            <div id='toolbar' >
                                <CustomToolbar />
                            </div>
                            <Editor />
                        </div>
                    </section> */}
                </section>
                <section className='postwrapper'>
                    <PostPreview />
                </section>
            </main>
        </>
    )
}
