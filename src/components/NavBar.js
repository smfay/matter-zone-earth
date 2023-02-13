import React, { useState, useEffect } from 'react'
import Logo from '../assets/svg/Logo'
import MenuIcon from '../assets/svg/icons/MenuIcon'
import Spinner from '../components/anims/Spinner'
import noise from '../assets/images/noisetexture.png'
import AuthDetails from './auth/AuthDetails'

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    const [menu, setMenu] = useState(true)

    const handleMenu = async (event) => {
        event.preventDefault()
        setMenu(!menu)
    }

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div
            // style={{ backgroundImage: `url(${noise})` }}
            className={`top-0 bg-gradient-to-b items-start from-black to-clear p-4 md:px-12 lg:px-32 text-zinc-300 z-40 fixed flex w-full max-w-[100vm] transition-all ease-in-out duration-700`}>
            <nav className="flex justify-between items-start w-full transition-all ease-in-out duration-700">
                <span className="md:w-4/5 transition-all ease-in-out duration-700 flex justify-between h-fit items-start space-x-12 w-full">
                    <a href="/home" className="z-50" >
                        <Logo className="text-zinc-300 h-10 md:h-16 hover:py-1 transition-all ease-in-out duration-300" />
                    </a>
                    <div className='flex transition-all ease-in-out duration-700 px-2 z-50'>
                        <AuthDetails className='self-start flex transition-all ease-in-out duration-700 h-full' />
                    </div>
                </span>
                <button onClick={handleMenu} className={`${menu ? '' : ''} z-50 transition-all ease-in-out duration-700`}>
                    <div className="group justify-self-end">
                        <MenuIcon className="text-zinc-300 h-10 md:h-12 hover:py-1 transition-all ease-in-out duration-300" />
                    </div >
                </button >
                <nav className={`${menu ? ' -right-[100vw] opacity-0 hidden' : 'backdrop-brightness-[0.3] backdrop-blur-lg opacity-100'} w-[100vw] items-start absolute top-0 right-0 w-screen pl-12 h-screen overflow-hidden flex transition-all ease-in-out duration-700`}>
                    <div className="text-zinc-300 text-xl font-light grid crid-flow-col p-4 md:px-12 lg:px-32 text-right w-full h-1/2">
                        <div className='h-20' />
                        <a href="/home" className="">/home</a>
                        <a href="/about" className="">/about</a>
                        <a href="/archive" className="">/archive</a>
                        <a href="/zones" className="">/zones</a>
                        <a href="/archive" className="">/one_of_us</a>
                    </div>
                </nav>
            </nav>

        </div >
    )
}

export default NavBar