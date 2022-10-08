import React from 'react'
import image from '../assets/images/default.png'

export default function Banner() {
    return (
        <span class="overflow-hidden h-40 w-full">
            <img src={image} class="w-screen">
            </img>
        </span>
    )
}
