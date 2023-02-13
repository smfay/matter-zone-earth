import React, { useState, useEffect } from 'react'
import { CustomToolbar, Editor } from '../components/content/editor/Editor'
import PostInfo from '../components/content/editor/PostInfo'


export default function CreatePost() {
    const [mountEditor, setMountEditor] = useState(false)

    useEffect(() => {
        setMountEditor(true);
    }, [])

    return (
        <>
            <main className="space-x-2 w-full justify-center min-h-screen p-4 md:px-12 lg:px-32">
                <section className="justify-start pt-32">
                    <div className='text-zinc-300 rounded'>
                        <PostInfo />
                    </div>
                    <div className='rounded w-full' >
                        <div className='' id='editor' >
                            {mountEditor &&
                                <>
                                    <div id='toolbar'>
                                        <CustomToolbar />
                                    </div>
                                    <div >
                                        <Editor className='text-editor' />
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
