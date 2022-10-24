import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import { searchQuery } from './FeedData'
import Card from './Card'
import SearchIcon from '../../assets/svg/icons/SearchIcon'

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
        <div className="w-screen h-full fixed backdrop-blur backdrop-brightness-[0.5] justify-center items-center text-zinc-200 justify-self-center rounded-lg z-30 left-0 top-0">
          <Spinner class="drop-shadow-lift-hard" />
        </div>
      }
      <div className="flex flex-wrap rounded-lg  z-10 lg:mx-32 " >
        <form onSubmit={HandleSubmit} className="appearance-none border-black border-theme w-full bg-zinc-400 rounded m-1 flex justify-end px-2 drop-shadow-lift-hard">
          <input
            className="bg-zinc-200 focus:outline-none border-theme border-black m-1 rounded px-4 focus:mb-5 focus:drop-shadow-lift-hard transition-all ease-in-out duration-200" placeholder='Search'
            id='searchInput'
            name='searchInput'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              let keyword = search;
              if (search === "") {
                console.log("search is empty")
                HandleSubmit()
              }
            }
            }
          />
          <button
            type='submit'
            className="font-bold"
          >
            <SearchIcon className="h-7" />
          </button>
        </form>
        {posts?.map((post) => <Card key={post.slug.current} post={post} />)}
      </div>
    </div>
  )
}

export default Feed