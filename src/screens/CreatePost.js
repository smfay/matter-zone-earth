import React from 'react'
import Logo from '../assets/svg/Logo'
import Feed from '../components/content/Feed'
import clickme from '../assets/images/clickme.gif'
import dude from '../assets/images/dude.png'
import SideBar from '../components/content/SideBar'
import Featured from '../components/content/Featured'
import PostEditor from '../components/content/PostEditor'


export default function CreatePost() {
    return (
        <>
            <main className="space-x-2 w-full justify-center min-h-screen p-4 md:px-12 lg:px-32">
                <section className="justify-start pt-32">
                    <div className='text-zinc-300 rounded'>
                        <PostEditor />
                    </div>
                </section>
            </main>
        </>
    )
}
