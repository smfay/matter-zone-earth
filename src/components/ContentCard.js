import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="flex flex-row items-center h-100 border-[1px] border-white hover:border-4 hover:mx-10 m-1 lg:hover:w-1/3 sm:w-full md:w-1/4 lg:w-1/5 bg-black p-2 rounded-lg transition-all ease-in-out duration-1000">
            <div class="flex flex-row">
                <div class="overflow-hidden aspect-square rounded-lg w-full">
                    <img src={image} class="object-cover h-full w-full" />
                </div>
                <span class="justify-center items-center p-2">
                    <h1 class="text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h1>
                    <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex space-x-1 justify-end items-center transition-all ease-in-out duration-1000">
                        <p class="flex uppercase text-xs border-white border-[1px] py-1 px-2 m-3">Author</p>
                        <p class="uppercase text-xs border-white border-[1px] py-1 px-2 m-3">Category</p>
                    </div>
                </span>
            </div>
        </div >
    )
}
