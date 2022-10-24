import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'

export default function NavBar() {
    return (
        <div className=" z-40 drop-shadow-lift fixed flex flex p-2 lg:px-20 items-center w-full">
            <nav className="flex justify-between space-x-10 items-center w-full">
                <span className="flex items-center space-x-5">
                    <a href="/home" className="flex justify-start items-center" >
                        <Logo className="text-black bg-zinc-300 drop-shadow-lift-hard border-theme rounded border-black h-12 md:h-18 transition-all ease-in-out duration-300" />
                    </a>
                    <div className="hidden md:flex h-fit content-center text-xs lg:text-base rounded bg-zinc-300 border-black border-theme drop-shadow-lift-hard space-x-5 px-5 ">
                        <a href="/home" className="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">HOME</a>
                        <a href="/about" className="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ABOUT</a>
                        <a href="/archive" className="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ARCHIVE</a>
                        <a href="/zones" className="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ZONES</a>
                        <a href="/archive" className="font-bold ring-offset-0 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">ONE OF US</a>
                    </div>
                </span>
                <div className="hidden md:flex items-end justify-end text-xs lg:text-base rounded bg-zinc-300 border-black border-theme drop-shadow-lift-hard space-x-3 px-3 ">
                    <a href="/home" className="font-bold ring-offset-0 px-3 py-2 rounded-lg hover:py-1 transition-all ease-in-out duration-300">SIGN IN</a>
                </div>
            </nav>
            <div className="flex">
                <MenuIcon className="h-12 md:hidden p-1 block justify-self-end rounded bg-zinc-300 border-black border-theme" />
            </div>

        </div>
    )
}
