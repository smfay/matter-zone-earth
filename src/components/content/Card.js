import BlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Card = ({ post }) => {
    return (
        <Link to={`/archive/${post.slug.current}`} key={post.slug.current} class="bg-zinc-400 space-x-2 flex h-56 justify-left border-zinc-700 border-[0.15em] hover:border-black hover:drop-shadow-lift hover:z-20 z-10 hover:bg-zinc-300 flex items-start hover:mx-2 hover:p-2 m-1 p-1 rounded-lg transition-all ease-in-out duration-200 grow">
            <div class="flex overflow-hidden h-full rounded border-[2px] border-black w-1/3">
                <img class="object-cover w-full h-full shadow-inset" src={post.mainImage.asset.url} alt={post.title} />
            </div>
            <section class="flex flex-col flex-wrap justify-start h-full w-2/3">
                <div class="flex flex-col space-x-5 w-full justify-end">
                    <p class="text-xs rounded bg-zinc-300 p-1 px-2 place-self-end font-black">{post.publishedAt}</p>
                </div>
                <h2 class="text-xl md:text-2xl font-bold capitalize">{post.title}</h2>
                <p class="text-xs uppercase">{post.author.name}</p>
                <div class="flex space-x-2 space-y-2 justify-start items-end">
                    {post.categories?.map((category) => <Tag title={category.title} />)}
                </div>
                <div class="line-clamp-1 md:line-clamp-2 text-sm max-w-fit">
                    <BlockContent
                        blocks={post.body}
                        projectId="x7moib4u"
                        dataset="production"
                    />
                </div>

            </section>
        </Link>
    )
}

export const Tag = (props) => {
    return (
        <div class="bg-zinc-300  px-2 py-0 h-6 flex items-center justify-center rounded">
            <p class="text-xs text-zinc-900 font-bold uppercase">{props.title}</p>
        </div>
    )
}

export default Card
