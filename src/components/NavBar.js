import React from 'react'
import Logo from '../assets/svg/Logo'

export default function NavBar() {
    return (
        <div class="z-40 fixed backdrop-brightness-50 backdrop-blur flex p-5 px-10 items-center w-full">
            <nav class="flex justify-left space-x-10 items-center w-full">
                <a href="/home" class="flex justify-start" >
                    <Logo class="h-12 ..." />
                </a>
                <div>
                    <a href="/home" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                    <a href="/about" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                    <a href="/archive" class="h-10 font-willump ring-offset-0 hover:font-black px-3 py-2 text-white rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>
                </div>
            </nav>
        </div>
    )
}
