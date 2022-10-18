import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'

export default function NavBar() {
    return (
        <div class="bg-gradient-to-b from-black to-transparent z-40 fixed flex flex p-2 lg:px-20 items-center w-full">
            <nav class="flex justify-between space-x-10 items-center w-full">
                <span class="flex items-center space-x-5">
                    <a href="/home" class="flex justify-start items-center" >
                        <Logo class="text-black bg-zinc-300 drop-shadow-lift  border-[0.15em] rounded border-black h-16 lg:h-18 transition-all ease-in-out duration-300" />
                    </a>
                    <div class="hidden md:flex h-fit content-center text-xs lg:text-base rounded bg-zinc-300 border-black border-[0.15em] space-x-5 px-5 ">
                        <a href="/home" class="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                        <a href="/about" class="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                        <a href="/archive" class="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>
                        <a href="/archive" class="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ZONES</a>
                        <a href="/archive" class="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ONE OF US</a>
                    </div>
                </span>
                <div class="hidden md:flex items-end justify-end text-xs lg:text-base rounded bg-zinc-300 border-black border-[0.15em] space-x-3 px-3 ">
                    <a href="/home" class="font-bold ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">SIGN IN</a>
                </div>
            </nav>
            <div class="flex">
                <MenuIcon class="h-16 md:hidden p-1 block justify-self-end rounded bg-zinc-300 border-black border-[0.15em]" />
            </div>

        </div>
    )
}
