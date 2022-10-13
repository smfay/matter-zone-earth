import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'

export default function NavBar() {
    return (
        <div class=" z-40 flex border-zinc-700 border-b-[1px] bg-zinc-500 flex p-2 items-center w-full">
            <nav class="flex justify-left space-x-10 items-center w-full">
                <a href="/home" class="flex justify-start" >
                    <Logo class="h-16 lg:h-12yarn ..." />
                </a>
                <div class="hidden md:inline-flex place-content-end w-full">
                    <a href="/home" class="font-black h-10 font-willump ring-offset-0 hover:font-bold px-3 py-2 text-zinc-900 rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                    <a href="/about" class="font-black h-10 font-willump ring-offset-0 hover:font-bold px-3 py-2 text-zinc-900 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                    <a href="/archive" class="font-black h-10 font-willump ring-offset-0 hover:font-bold px-3 py-2 text-zinc-900 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>
                </div>
            </nav>
            <div class="flex">
                <MenuIcon class="h-12 md:hidden block justify-self-end" />
            </div>

        </div>
    )
}
