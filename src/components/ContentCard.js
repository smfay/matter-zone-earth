import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="shadow-inner hover:z-10 hover:ring-zinc-400 hover:ring-2 hover:border-black hover:drop-shadow-[0px_25px_20px_rgba(1,1,1,0.3)] flex flex-row items-center border-[1px] border-zinc-600 hover:mx-4 m-1 lg:hover:w-1/3 sm:w-full max-w-full md:w-1/3 lg:w-1/3 bg-zinc-500 p-2 rounded-lg transition-all ease-in-out duration-700">
            <div class="flex flex-row h-full">
                <div class="overflow-hidden rounded-lg w-full">
                    <img src={image} class="object-cover h-full w-full" />
                </div>
                <div class="text-xs font-blight flex flex-wrap justify-cleft items-center px-2 h-full">
                    <p class="py-2 text-zinc-800">02/23/2020</p>
                    <h1 class="text-zinc-900 grow text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h1>
                    <p class="py-2  text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex flex-wrap space-x-1 justify-evenly transition-all ease-in-out duration-7000">
                        {["Author", "Category", "Issue"].map(tag => <Tag>{tag}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Tag(props) {
    return (
        <p class="text-zinc-300 font-light rounded-lg bg-zinc-800 uppercase text-xs border-zinc-700 border-[1px] py-1 px-2 my-2">{props.children}</p>
    )
}
