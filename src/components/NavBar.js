import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'

export default function NavBar() {
    return (
        <div class="z-40 fixed flex backdrop-blur flex p-2 lg:px-20 items-center w-full" onClick="none">
            <nav class="flex justify-left space-x-10 items-center w-full">
                <a href="/home" class="flex justify-start items-center" >
                    <Logo class="text-black bg-zinc-300 drop-shadow-lift border-[0.15em] rounded border-black h-16 lg:h-20 transition-all ease-in-out duration-300" />
                </a>
                <div class="hidden md:inline-flex place-content-end rounded bg-zinc-300 border-black border-[0.15em] space-x-3 px-3 ">
                    <a href="/home" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                    <a href="/about" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                    <a href="/archive" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>

                </div>
            </nav>
            <div class="flex">
                <MenuIcon class="h-12 md:hidden block justify-self-end rounded bg-zinc-300 border-black border-[0.15em]" />
            </div>

        </div>
    )
}
