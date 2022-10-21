import React from 'react'
import image from '../assets/images/default.png'
export default function ContentCard() {
    return (
        <div className="bg-earth-200 hover:z-20 z-10 h-64 border-black border-[1px] flex flex-row hover:mx-4 m-1 lg:hover:w-1/3 sm:w-full max-w-full md:w-1/3 lg:w-1/3 p-2 rounded transition-all ease-in-out duration-700">
            <div className="flex flex-row h-full">
                <div className="overflow-hidden w-1/3 rounded border-black border-[1px]">
                    <img src={image} className="object-cover h-full w-full" />
                </div>
                <div className="text-xs font-blight flex flex-wrap justify-left items-center px-2 h-full w-2/3">
                    <p className="py-2">10-14-2022</p>
                    <h2 className="w-full text-2xl font-bold">Excepteur sint occaecat cupidatat non proident</h2>
                    <p className="py-2 text-base w-full line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="flex flex-wrap space-x-1 justify-evenly transition-all ease-in-out duration-7000">
                        {["Author", "Category", "Issue"].map(tag => <Tag>{tag}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Tag(props) {
    return (
        <p className="font-light rounded-lg bg-earth-200 uppercase text-xs border-black border-[1px] py-1 px-2 my-2">{props.children}</p>
    )
}
