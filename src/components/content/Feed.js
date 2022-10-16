import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import { feedQuery, searchQuery } from './FeedData'
import Card from './Card'

const Feed = () => {
  const [loading, setloading] = useState(false);
  const [posts, setCards] = useState(null);
  useEffect(() => {
    setloading(true);

    client.fetch(feedQuery)
      .then((data) => {
        setCards(data);
        setloading(false);
      })
      .catch(console.error)
  }, [])


  if (loading) return <Spinner />

  return (
    <div class="flex flex-wrap border-black border-[0.15em] rounded bg-zinc-600 z-10 shadow-inset">
      {posts?.map((post) => <Card key={post.slug.current} post={post} />)}
    </div>
  )
}

export default Feed