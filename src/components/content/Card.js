import BlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Card = ({ post }) => {
    return (
        <div key={post.slug.current} class="bg-zinc-400 space-x-2 space-y-2 flex h-48 justify-left border-zinc-600 border-[0.15em] hover:border-black hover:drop-shadow-lift hover:z-20 z-10 hover:bg-zinc-300 flex items-start hover:mx-4 m-1 p-2 rounded transition-all ease-in-out duration-700 grow">
            <div class="flex overflow-hidden h-full rounded border-[2px] border-black w-1/2">
                <img class="object-cover w-full h-full shadow-inset" src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <section class="flex flex-col flex-wrap h-full w-1/2">
                <p class="text-xs place-self-end">{post.publishedAt}</p>
                <p class="">by {post.author.name}</p>
                <h2 class="text-xl md:text-2xl font-bold">{post.title}</h2>
                <div class="line-clamp-2 text-sm max-w-fit">
                    <BlockContent
                        blocks={post.body}
                        projectId="x7moib4u"
                        dataset="production"
                    />
                </div>
            </section>
        </div>
    )
}

export default Card
