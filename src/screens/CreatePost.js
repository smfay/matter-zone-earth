import React, { useState, useEffect } from 'react'
import BlockBuilder from '../components/content/editor/BlockBuilder'
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
                <section className="justify-start">
                    <div className='text-zinc-300 rounded'>
                        <PostInfo />
                    </div>
                    <div className='rounded w-full' >
                        <section>
                            <BlockBuilder />
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}
