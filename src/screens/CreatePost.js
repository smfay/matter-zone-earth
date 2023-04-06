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
    const [blockTree, setBlockTree] = useState([])
    const { data, loading, error } = usePalette(bgImage)

    function blocksToPreview(blocks) {
        const editorBlocks = [...blocks]
        setBlockTree(editorBlocks);
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
            <div className='gap-2 flex flex-col'>
                <hr className='border-black mx-4' />
                <hr className='border-black mx-4' />
                <hr className='border-black mx-4' />
                <hr className='border-black mx-4' />
            </div>
            <main className={`bg-zinc-500 gap-4 grid grid-cols-1 md:grid-cols-12 grid-flow-row md:grid-flow-col lg:flex-row w-full justify-center min-h-screen p-4`}
            >
                <section className="bg-zinc-500 border-theme border-black rounded p-4 md:col-span-7 lg:col-span-5">
                    <div className='text-zinc-300 rounded'>
                        <PostInfo changeBgImage={updateBg} colors={data} />
                    </div>
                    <div className='rounded flex flex-col' >
                        <BlockTools updatePreview={blocksToPreview} />
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
                <section className='md:col-span-5 lg:col-span-7'>
                    <nav className='tool justify-end space-x-4 bg-zinc-500 w-full p-2 px-4 rounded-t border-theme border-black flex items-center' >
                        <div className='flex gap-2 toolbutton'>
                            <label for="showTitle">Mobile view</label>
                            <input type="checkbox" id="showTitle" name="showTitle" />
                        </div>
                        <div className='flex gap-2 toolbutton'>
                            <label for="showTitle">Show title</label>
                            <input type="checkbox" id="showTitle" name="showTitle" />
                        </div>
                        <div className='flex gap-2 toolbutton'>
                            <label for="useColors">use main image palette</label>
                            <input type="checkbox" id="showTitle" name="showTitle" />
                        </div>
                        <div className='flex gap-2 toolbutton'>
                            <button className='aspect-square w-6 hover:bg-green-600 rounded-full bg-zinc-300 border-theme border-black' >?</button>
                        </div>
                    </nav>
                    <section className='rounded-b border-t-0 border-theme border-black p-4 bg-zinc-500' >
                        <PostPreview data={blockTree} color={data.muted} />
                    </section>
                </section>
            </main>
        </>
    )
}
