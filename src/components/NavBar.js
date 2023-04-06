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
            className={`top-0 h-fit items-center py-4 px-4 text-zinc-300 z-40 w-full max-w-[100vm] transition-all ease-in-out duration-700`}>
            <nav className="flex justify-between items-center w-full h-full transition-all ease-in-out duration-700">
                <span className="transition-all ease-in-out duration-700 flex justify-between h-full items-start">
                    <a href="/home" className="z-50" >
                        <Logo className="text-black h-full hover:text-zinc-300 transition-all ease-in-out duration-100" />
                    </a>
                </span>
                <span className='toolitem flex grow text-black items-center h-full w-full p-4 mx-4 justify-between '>
                    <a>Zones</a>
                    <a>Economy</a>
                    <a>Editor</a>
                    <a>Account</a>
                    <a>About</a>
                    <a>Hall of fame</a>
                    <a>Graveyard</a>
                </span>
                <div className='flex transition-all h-min ease-in-out duration-700 z-50'>
                    <AuthDetails className='transition-all ease-in-out duration-700 w-full' />
                </div>
            </nav>

        </div >
    )
}

export default NavBar