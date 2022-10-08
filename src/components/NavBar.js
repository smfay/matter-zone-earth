import React from 'react'
import Logo from '../assets/svg/Logo'

export default function NavBar() {
    return (
        <div class="bg-black flex justify-evenly p-2 items-center">
            <nav class="flex justify-evenly space-x-10 items-center">
                <a href="/home" >
                    <Logo class="h-15 ..." />
                </a>
                <a href="/home" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                <a href="/about" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                <a href="/archive" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>
            </nav>
        </div>
    )
}
