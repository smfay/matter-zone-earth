import BlockContent from '@sanity/block-content-to-react'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../client'
import { urlFor } from '../../ImageUrl'
import FeaturedCard from './FeaturedCard'
import bannerguy from '../../assets/images/wow.png'
import SignIn from '../auth/SignIn'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const FeaturedBackground = ({ post }) => {
    const bg = (post.mainImage.asset.metadata.palette.vibrant.background);
    const bgImage = (urlFor(post.mainImage.asset._id).width(1024).url());

    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    })

    return (
        <div
            style={
                {
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: `cover`
                }
            }
            key={post.slug.current}
            className="justify-center overflow-hidden transition-all flex grow transition-all ease-in-out duration-100">
            <main
                className="bg-zinc-500 bg-main py-4 h-full border-t-theme border-b-theme border-black backdrop-blur backdrop-brightness-[1.5] justify-center flex flex-col w-full py-0 p-4 md:px-12 lg:px-32 transition-all ease-in-out duration-100">
                <div className='justify-center drop-shadow-lift-hard items-center md:flex transition-all ease-in-out duration-100'>
                    <div className='featured-container my-12'>
                        <FeaturedCard key={post.slug.current} post={post} className="" />
                    </div>
                    {!authUser &&
                        <section className='place-self-start mt-4 md:mt-0 md:ml-4 h-full w-full flex flex-col  md:w-1/3 transition-all ease-in-out duration-100 grow'>
                            <SignIn />
                        </section>
                    }
                </div>

            </main >
        </div >
    )
}

export default FeaturedBackground
