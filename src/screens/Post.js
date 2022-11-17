import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react'
import Spinner from '../components/anims/Spinner'
import client from '../client'
import { urlFor } from '../ImageUrl'


export default function Post() {
    const [singlePost, setSinglePost] = useState([])
    const [Loading, setLoading] = useState(true)
    const [bg, setBg] = useState(null)
    const [fg, setFg] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                title,
                body,
                author -> {
                    name
                },
                mainImage {
                    asset ->,
                    alt,
                },
            }`
        ).then((data) => {
            window.scrollTo(0, 0);
            setSinglePost(data[0])
            setLoading(false)
            setBg(data[0].mainImage.asset.metadata.palette.dominant.background)
            setFg(data[0].mainImage.asset.metadata.palette.vibrant.background)
            console.log(data[0])
        }
        ).catch(console.error)


    }, [slug])

    return (
        <>
            {Loading ? (
                <div className="w-screen h-full fixed bg-black justify-center items-center text-zinc-200 justify-self-center rounded-lg z-30 left-0 top-0">
                    <Spinner class="drop-shadow-lift-hard" />
                </div>
            ) : (
                <div>
                    <header className="h-64 flex flex-wrap text-right text-zinc-200 justify-center border-black content-center items-center overflow-hidden">
                        {singlePost.mainImage && singlePost.mainImage.asset && (
                            <img
                                className="object-cover w-full -h-full blur"
                                src={urlFor(singlePost.mainImage.asset._id).width(50).url()}
                                alt={singlePost.title}
                                title={singlePost.title}
                            />
                        )}
                    </header>
                    <main className="p-0 text-zinc-200">
                        <section
                            style={{ backgroundColor: bg }}
                            className='bg-zinc-900 p-2'
                        >
                            <article className="bg-black rounded p-8 lg:p-10 space-y-10 md:px-32 min-h-screen justify-center lg:px-96 flex flex-wrap flex-col w-full">
                                <h1 style={{ color: fg }} className="capitalize drop-shadow-lift-hard stroke-2 text-4xl lg:text-7xl py-5 border-b-[.015em] font-bold w-full lg:w-2/3 font-bold">{singlePost.title}</h1>
                                <h2 className="text-sm font-thin uppercase" >{singlePost.author.name}</h2>
                                <section className="text-justify">
                                    <BlockContent
                                        blocks={singlePost.body}
                                        projectId="x7moib4u"
                                        dataset="production"
                                    />
                                </section>
                            </article>
                        </section>
                    </main>
                </div>
            )
            }
        </>
    )
}
