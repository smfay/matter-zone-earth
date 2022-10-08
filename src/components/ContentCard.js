import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div class="bg-black p-2">
            <img src={image} class="aspect-square" />
            <h1 class="text-3xl font-black">Excepteur sint occaecat cupidatat non proident</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>

            </div>
        </div>
    )
}
