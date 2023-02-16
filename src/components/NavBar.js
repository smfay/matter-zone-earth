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
            className={`top-0 h-fit items-start px-4 md:px-12 lg:px-32 text-zinc-300 z-40 w-full max-w-[100vm] transition-all ease-in-out duration-700`}>
            <nav className="flex justify-between items-start w-full h-full transition-all ease-in-out duration-700">
                <span className="md:w-4/5 transition-all ease-in-out duration-700 flex justify-between h-fit items-start w-full">
                    <a href="/home" className="z-50" >
                        <Logo className="text-black h-10 md:h-16 hover:py-1 transition-all ease-in-out duration-300" />
                    </a>
                </span>
                <div className='flex self-center transition-all h-full ease-in-out duration-700 z-50'>
                    <AuthDetails className='self-center flex transition-all ease-in-out duration-700 h-full' />
                </div>
            </nav>

        </div >
    )
}

export default NavBar