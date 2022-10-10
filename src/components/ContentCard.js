import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="hover:z-10 hover:border-white hover:drop-shadow-[0px_50px_50px_rgba(1,1,1,10)] flex flex-row items-center border-[1px] border-zinc-900 hover:mx-4 m-1 lg:hover:w-1/3 sm:w-full md:w-1/2 lg:w-1/5 bg-black p-2 rounded-lg transition-all ease-in-out duration-1000">
            <div class="flex flex-row h-full">
                <div class="overflow-hidden rounded-lg w-full">
                    <img src={image} class="object-cover h-full w-full" />
                </div>
                <div class="text-xs font-blight flex flex-wrap justify-cleft items-center px-2 h-full">
                    <p class="py-2  text-zinc-400">02/23/2020</p>
                    <h1 class="grow text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h1>
                    <p class="py-2  text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex flex-wrap space-x-1 justify-evenly transition-all ease-in-out duration-1000">
                        <p class="font-light rounded-lg uppercase text-xs border-zinc-700 border-[1px] py-1 px-2 my-2">Author</p>
                        <p class="font-light rounded-lg uppercase text-xs border-zinc-700 border-[1px] py-1 px-2 my-2">Category</p>
                        <p class="font-light rounded-lg uppercase text-xs border-zinc-700 border-[1px] py-1 px-2 my-2">Issue 1</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
