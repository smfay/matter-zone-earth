import BlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Card = ({ post }) => {
    return (
        <div key={post.slug.current} class="bg-earth-200 md:max-w-lg space-x-2 h-64 justify-left hover:z-20 z-10 border-black border-[1px] flex items-start hover:mx-4 m-1 p-2 rounded transition-all ease-in-out duration-700">
            <div class="shadow-inner flex h-full w-1/2 overflow-hidden rounded border-[1px] border-black">
                <img class="object-cover h-64 w-full" src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <section class="flex flex-col w-1/2">
                <p class="text-xs">{post.publishedAt}</p>
                <p class="">by {post.author.name}</p>
                <h2 class="text-2xl font-bold">{post.title}</h2>
                <div class="line-clamp-2">
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