import BlockContent from '@sanity/block-content-to-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../client'
import { urlFor } from '../../ImageUrl'

const Card = ({ post }) => {
    const bg = (post.mainImage.asset.metadata.palette.vibrant.background);
    const bgImage = (urlFor(post.mainImage.asset._id).width(24).url());
    return (
        <Link to={`/archive/${post.slug.current}`}
            style={
                {
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: `cover`
                }
            }
            key={post.slug.current}
            className="group overflow-hidden m-2 rounded transition-all  hover:drop-shadow-lift-down ease-in-out duration-300 h-60 border-black hover:border-zinc-500 min-w-fit hover:border-theme flex grow">
            <main
                className="backdrop-brightness-[0.3] backdrop-blur w-full h-full justify-left flex items-start transition-all ease-in-out duration-300">
                <div className="flex overflow-hidden max-w-md h-full grow-0 bg-black">
                    <img className="object-cover h-full shadow-inset flex grow" src={urlFor(post.mainImage.asset._id).width(300).url()} alt={post.title} />
                </div>
                <section className="flex flex-col backdrop-blur flex-wrap justify-start p-4 w-full sm:max-w-sm lg:max-w-min">
                    <h2 className="text-xl md:text-2xl font-medium group-hover:font-bold line-clamp-3 capitalize">{post.title}</h2>
                    <p className="text-xs uppercase">{post.author.name}</p>
                    <div className="flex flex-wrap space-x-2 space-y-2 justify-end items-end">
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

                </section>
            </main>
        </Link>
    )
}

export const Tag = (props) => {
    return (
        <div key={props.title} className="bg-black  px-2 py-0 h-6 flex items-center justify-center rounded">
            <p className="text-xs text-zinc-200 font-bold uppercase">{props.title}</p>
        </div>
    )
}

export default Card
