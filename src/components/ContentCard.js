import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="flex flex-row items-center min-h-fit border-[1px] border-white hover:skew-y-3 hover:-skew-x-3 m-5 sm:w-full md:w-3/4 lg:w-1/4 hover:p-3 bg-black p-2 rounded-lg transition-all ease-in-out duration-300">
            <div class="flex flex-row">
                <div class="overflow-hidden aspect-square rounded-lg w-1/2 h-full">
                    <img src={image} class="object-cover h-full w-full" />
                </div>
                <span class="justify-center items-center p-2">
                    <h1 class="text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h1>
                    <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex space-x-1 justify-end items-center">
                        <p class="uppercase text-xs border-white border-[1px] py-1 px-2 m-3">Author</p>
                        <p class="uppercase text-xs border-white border-[1px] py-1 px-2 m-3">Category</p>
                    </div>
                </span>
            </div>
        </div >
    )
}
