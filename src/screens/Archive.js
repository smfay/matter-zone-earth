import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import client from '../client'
import ContentCard from '../components/ContentCard'

export default function Archive() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "post"] {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
    )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section>
        <h1>Archive</h1>
        <h2>Total Posts: {posts.length}</h2>

        <div class="flex flex-col">
          {posts.map((post) => (
            <div class="m-2 w-64 bg-zinc-500 p-2 rounded-lg transition-all ease-in-out duration-700">
              <article key={post.slug.current} class="flex flex-col">
                <img src={post.mainImage.asset.url} alt={post.title} class="rounded-lg" />
                <section>
                  <h2>{post.publishedAt}</h2>
                  <h2 class="text-zinc-900 grow text-2xl font-bold">{post.title}</h2>
                  <Link to={`/archive/${post.slug.current}`}>Go to page</Link>
                </section>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}