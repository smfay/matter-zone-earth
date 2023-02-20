import React, { useState, useEffect } from 'react'
import BlockBuilder from '../components/content/editor/BlockBuilder'
import BlockTools from '../components/content/editor/BlockTools'
import { CustomToolbar, Editor } from '../components/content/editor/Editor'
import PostInfo from '../components/content/editor/PostInfo'


export default function CreatePost() {
    const [mountEditor, setMountEditor] = useState(false)

    useEffect(() => {
        setMountEditor(true);
    }, [])

    return (
        <>
            <main className="bg-zinc-500 space-x-2 w-full justify-center min-h-screen p-4 md:px-12 lg:px-32">
                <section className="">
                    <div className='text-zinc-300 rounded'>
                        <PostInfo />
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
            </main>
        </>
    )
}
