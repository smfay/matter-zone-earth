import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import Card from './Card'
import SearchIcon from '../../assets/svg/icons/SearchIcon'
import { useTrail, useChain, useTransition, useSprings, animated, useSpringRef } from '@react-spring/web'

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
      <div className="flex items-start flex-wrap justify-center rounded z-10 w-full grow" >

        <form onSubmit={HandleSubmit} className="appearance-none w-full rounded flex-col flex justify-end items-end">
          <div className='flex pb-4'>
            <input
              className="" placeholder='Search'
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
              <SearchIcon className="h-6 text-black" />
            </button>
          </div>
        </form>
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
          {posts?.map((post) => <Card key={post.slug.current} post={post} className="" />)}
        </section>
      </div>
    </div>
  )
}

export default Feed