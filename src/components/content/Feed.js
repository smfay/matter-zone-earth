import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import Card from './Card'
import SearchIcon from '../../assets/svg/icons/SearchIcon'

const Feed = () => {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState("");

  const HandleSubmit = async (event) => {
    event.preventDefault()
    grabPosts(search);

  }

  useEffect(() => {
    grabPosts("");
  }, [])

  async function grabPosts(q) {
    let url = "http://localhost:3001/posts?" + new URLSearchParams({ q: q })
    console.log(url)
    setloading(true);
    let response = await fetch(url)
    let data = await response.json()
    setPosts(data);
    setloading(false);
    console.log(data)
  }

  return (
    <div>
      {loading &&
        <div className="w-screen h-full fixed backdrop-blur backdrop-brightness-[0.5] justify-center items-center text-zinc-200 justify-self-center rounded-lg z-30 left-0 top-0">
          <Spinner class="drop-shadow-lift-hard" />
        </div>
      }
      <div className="flex flex-wrap rounded z-10 w-full bg-zinc-900 drop-shadow-lift-down" >
        <form onSubmit={HandleSubmit} className="appearance-none w-full rounded m-1 h-12 flex justify-end px-2 items-center">
          <input
            className="focus:outline-none bg-zinc-800 m-1 rounded px-4 transition-all h-8 ease-in-out duration-200" placeholder='Search'
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
            <SearchIcon className="h-6 text-zinc-500" />
          </button>
        </form>
        {posts?.map((post) => <Card key={post.slug.current} post={post} className="flex" />)}
      </div>
    </div>
  )
}

export default Feed