import React from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'
import noise from '../assets/images/noisetexture.png'

export default function NavBar() {
    return (
        <div
            // style={
            //     {
            //         backgroundImage: `url(${noise})`,
            //     }}
            className="pb-12 bg-gradient-to-b from-black to-clear p-4 text-zinc-300 z-40 fixed flex items-center justify-center w-full">
            <nav className="flex justify-between space-x-10 items-center content-center w-full align-center">
                <span className="flex items-center space-x-5">
                    <a href="/home" className="flex justify-center items-center rounded" >
                        <Logo className="text-zinc-100 h-12 md:h-16" />
                    </a>
                    {/* <div className="hidden md:flex h-fit flex grow content-center text-xs lg:text-base font-light rounded space-x-5 px-5 text-zinc-300">
                        <a href="/home" className="">HOME</a>
                        <a href="/about" className="">ABOUT</a>
                        <a href="/archive" className="">ARCHIVE</a>
                        <a href="/zones" className="">ZONES</a>
                        <a href="/archive" className="">ONE OF US</a>
                    </div> */}
                </span>
                {/* <div className="text-zinc-300 font-light hidden md:flex items-end justify-end text-xs lg:text-base space-x-3 px-3 ">
                    <a href="/home" className="">SIGN IN</a>
                </div> */}
            </nav>
            <div className="flex">
                <MenuIcon className="h-12 p-1 block justify-self-end" />
            </div>

        </div>
    )
}
