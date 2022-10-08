import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="hover:shadow-inner shadow-white hover:skew-y-3 hover:-skew-x-3 m-5 sm:w-full md:w-1/4 lg:w-1/5 border-2 hover:border-4 border-white hover:p-6 aspect-video bg-black p-8 rounded-lg space-x-1 space-y-3 transition-all ease-in-out duration-300">
            <div class="bg-fixed overflow-hidden aspect-video rounded-lg">
                <img src={image} class="object-center" />
            </div>
            <h1 class="text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h1>
            <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="flex justify-end">
                <a>Category</a>
                <a>Author</a>
            </div>
        </div>
    )
}
