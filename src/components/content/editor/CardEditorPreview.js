import BlockContent from '@sanity/block-content-to-react'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../../client'
import { urlFor } from '../../../ImageUrl'

const CardEditorPreview = ({ title, image }) => {
    // const bg = (post.mainImage.asset.metadata.palette.vibrant.background);
    // const bgImage = (urlFor(post.mainImage.asset._id).width(64).url());

    return (
        <div
            style={
                {
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`
                }
            }
            className="group text-black overflow-hidden rounded transition-all hover:drop-shadow-lift-down ease-in-out duration-100 hover:drop-shadow-lift-hard h-full border-black w-full border-theme flex grow"
        >
            <main
                className="bg-zinc-500 group-hover: bg-zinc-400 backdrop-brightness-[0.3] backdrop-blur-lg w-full h-full justify-left flex items-start transition-all ease-in-out duration-100">
                <div className="flex align-center border-r-theme border-black justify-center items-center overflow-hidden w-full max-w-1/2 h-full grow-0 bg-black transition-all ease-in-out duration-100">
                    <img className="object-cover h-full  flex grow transition-all ease-in-out duration-100" src={image} />
                </div>
                <section className="flex flex-col h-full backdrop-blur flex-wrap justify-start p-4 w-full">
                    <h2 className="text-2xl md:text-3xl font-semibold line-clamp-3 capitalize sm:max-w-sm lg:max-w-md">{title}</h2>
                    <p className="text-xs uppercase">Author Name</p>
                    {/* <div className="flex flex-wrap space-x-2 space-y-2 justify-start items-end">
                        {post.categories?.map((category, index) => <Tag index={index} key={index} title={category.title} />)}
                        <p style={{ backgroundColor: bg }} className="text-xs text-black bg-zinc-300 p-1 rounded px-2 place-self-end font-black">{post.publishedAt}</p>

                    </div> */}
                    <p className="absolute text-sm text-right uppercase font-semibol bottom-0 right-0 p-4">0 points</p>
                </section>
            </main>
        </div>
    )
}

// export const Tag = (props) => {
//     return (
//         <div key={props.title} className="bg-black px-2 py-0 h-6 flex items-center justify-center rounded">
//             <p className="text-xs text-zinc-200 font-bold uppercase">{props.title}</p>
//         </div>
//     )
// }

export default CardEditorPreview
