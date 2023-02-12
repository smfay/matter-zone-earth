import React, { useState, useEffect } from 'react'
import client from '../../client'
import Spinner from '../anims/Spinner'
import FeaturedCard from './FeaturedCard'
import FeaturedBackground from './FeaturedBackground'
import SearchIcon from '../../assets/svg/icons/SearchIcon'

const Featured = () => {
    const [loading, setloading] = useState(false);
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        grabPosts("");
    }, [])

    async function grabPosts() {
        let url = "http://localhost:3001/posts/featured"
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
            <div className="" >
                {loading &&
                    <div className="w-full h-full backdrop-blur backdrop-brightness-[0.5] justify-center items-center text-zinc-200 justify-self-center rounded-lg z-30 left-0 top-0">
                        <Spinner class="drop-shadow-lift-hard" />
                    </div>
                }
                {posts?.map((post) => <FeaturedBackground key={post.slug.current} post={post} className="w-full h-full" />)}
            </div>
        </div>
    )
}

export default Featured