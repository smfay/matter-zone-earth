import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'

export default function NavBar() {
    return (
        <div class="z-40 fixed flex border-black border-b-[1px] bg-earth-200 flex p-2 px-5 items-center w-full">
            <nav class="flex justify-left space-x-10 items-center w-full">
                <a href="/home" class="flex justify-start items-center" >
                    <Logo class="h-16 p-x-1 border-[1px] rounded border-black" />
                </a>
                <div class="hidden md:inline-flex place-content-end w-full">
                    <a href="/home" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                    <a href="/about" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                    <a href="/archive" class="font-bold h-10 ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>

                </div>
            </nav>
            <div class="flex">
                <MenuIcon class="h-12 md:hidden block justify-self-end" />
            </div>

        </div>
    )
}
