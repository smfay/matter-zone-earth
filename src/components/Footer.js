import React from 'react'
import Logo from '../assets/svg/Logo'

export default function Footer() {
    return (
        <nav className="bg-black absolute w-full h-32 justify-left flex content-end items-end text-zinc-200">
            <Logo className="w-96 p-5" />
            <p className="text-xs text-left p-5" >Do you lose sleep at night? Do you have an unfulfilled desire to join a vague collective? the MatterZone is a digital zine that makes you <em>feel cool,</em> without going through the hassle of <em>actually being cool.</em> It just makes sense. </p>

        </nav>
    )
}
