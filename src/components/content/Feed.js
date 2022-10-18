import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import { feedQuery, searchQuery } from './FeedData'
import Card from './Card'

const Feed = () => {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    setloading(true);

    client.fetch(feedQuery)
      .then((data) => {
        setPosts(data);
        setloading(false);
        console.log(data)
      })
      .catch(console.error)
  }, [])


  if (loading) return (
    <div class="w-screen h-screen border-black flex justify-center items-center border-[0.15em] rounded-lg bg-zinc-700 z-10">
      <Spinner />
    </div>
  )

  return (
    <div class="flex flex-wrap border-black border-[0.15em] rounded-lg bg-zinc-600 z-10 shadow-inset" >
      {posts?.map((post) => <Card key={post.slug.current} post={post} />)}
    </div>
  )
}

export default Feed