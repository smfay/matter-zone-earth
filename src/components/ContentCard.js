import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="flex flex-col items-center min-h-fit border-2 border-white hover:skew-y-3 hover:-skew-x-3 m-5 sm:w-full md:w-3/4 lg:w-1/5 hover:p-2 bg-black p-4 rounded-lg transition-all ease-in-out duration-75">
            <div class="overflow-hidden rounded-lg">
                <img src={image} class=".object-cover" />
            </div>
            <span class="justify-center items-center p-4">
                <h1 class="text-3xl font-bold py-5">Excepteur sint occaecat cupidatat non proident</h1>
                <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="flex space-x-5 justify-end items-center">
                    <p class="border-white rounded-full border-2 py-1 px-3 m-3">Author</p>
                    <p class="border-white rounded-full border-2 py-1 px-3 m-3">Category</p>
                </div>
            </span>
        </div >
    )
}
