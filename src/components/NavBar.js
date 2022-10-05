import React from 'react'
import Logo from '../assets/svg/Logo'

export default function NavBar() {
    return (
        <div class="bg-black flex justify-between p-2">
            <a href="/home">
                <Logo class="hover:animate-ping ..." />
            </a>
            <nav class="flex justify-evenly space-x-4">
                <a href="/home" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 hover:rounded-sm">Home</a>
                <a href="/about" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
                <a href="/archive" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Archive</a>
            </nav>
        </div>
    )
}
