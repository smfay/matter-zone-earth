import BlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../client'
import { urlFor } from '../../ImageUrl'

const Card = ({ post }) => {
    const bg = (post.mainImage.asset.metadata.palette.vibrant.background);
    const bgImage = (urlFor(post.mainImage.asset._id).width(64).url());
    return (
        <Link to={`/archive/${post.slug.current}`}
            style={
                {
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: `cover`
                }
            }
            key={post.slug.current}
            className="group overflow-hidden rounded border-theme border-black transition-all hover:drop-shadow-lift-hard ease-in-out duration-100 h-60 max-w-fit hover:border-theme flex grow">
            <main
                className="bg-zinc-500 group-hover:bg-zinc-300 backdrop-brightness-[0.3] backdrop-blur-lg w-full h-full justify-left flex items-start transition-all ease-in-out duration-100">
                <div className="flex border-r-theme border-black align-center justify-center items-center overflow-hidden w-full max-w-[25%] h-full grow-0 bg-black transition-all ease-in-out duration-100">
                    <img className="object-cover h-full flex grow transition-all ease-in-out duration-100" src={urlFor(post.mainImage.asset._id).width(300).url()} alt={post.title} />
                </div>
                <section className="flex flex-col h-full w-full backdrop-blur flex-wrap justify-start p-4 ">
                    <h2 className="text-xl md:text-2xl font-semibold line-clamp-3 capitalize sm:max-w-sm lg:max-w-md">{post.title}</h2>
                    <p className="text-xs uppercase">{post.author.name}</p>
                    <div className="flex flex-wrap space-x-2 space-y-2 justify-start items-end">
                        {post.categories?.map((category, index) => <Tag index={index} key={index} title={category.title} />)}
                        <p style={{ backgroundColor: bg }} className="text-xs text-black bg-zinc-300 p-1 rounded px-2 place-self-end font-black">{post.publishedAt}</p>

                    </div>
                    {/* <div className="line-clamp-1 md:line-clamp-1 text-sm max-w-fit">
                        <BlockContent
                            blocks={post.body}
                            projectId="x7moib4u"
                            dataset="production"
                        />
                    </div> */}
                    <p className="absolute text-sm text-right uppercase font-semibol bottom-0 right-0 p-4">{post.approval} points</p>
                </section>
            </main>
        </Link>
    )
}

export const Tag = (props) => {
    return (
        <div key={props.title} className="bg-black px-2 py-0 h-6 flex items-center justify-center rounded">
            <p className="text-xs text-zinc-200 font-bold uppercase">{props.title}</p>
        </div>
    )
}

export default Card
