import React from 'react'

export default function NavBar() {
    return (
        <div class="bg-black">
            <nav class="flex justify-center space-x-4">
                <a href="/home" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                <a href="/about" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
                <a href="/archive" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Archive</a>
            </nav>
        </div>
    )
}
