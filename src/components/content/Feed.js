import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import { searchQuery } from './FeedData'
import Card from './Card'

const Feed = () => {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault()

    setloading(true);
    client.fetch(searchQuery(search))
      .then((data) => {
        setPosts(data);
        setloading(false);
        console.log(data)
      })
      .catch(console.error)

  }

  useEffect(() => {
    setloading(true);

    client.fetch(searchQuery(search))
      .then((data) => {
        setPosts(data);
        setloading(false);
        console.log(data)
      })
      .catch(console.error)
  }, [])


  return (
    <div>
      {loading &&
        <div class="w-full h-screen border-black flex justify-center items-center border-[0.15em] rounded-lg bg-zinc-700 z-10">
          <Spinner />
        </div>
      }
      <div class="flex flex-wrap border-black border-[0.15em] rounded-lg bg-zinc-600 z-10 shadow-inset" >
        <form onSubmit={HandleSubmit} class="border-zinc-700 border-[0.15em] w-full bg-zinc-400 rounded m-1 flex justify-end px-2">
          <input
            class="bg-zinc border-[0.15em] border-black m-1 rounded border-black px-4" placeholder='Search'
            id='searchInput'
            name='searchInput'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              if (search === "") {
                console.log("search is empty")
                HandleSubmit()
              }
            }
            }
          />
          <button
            type='submit'
            class="font-bold"
          >GO</button>
        </form>
        {posts?.map((post) => <Card key={post.slug.current} post={post} />)}
      </div>
    </div>
  )
}

export default Feed