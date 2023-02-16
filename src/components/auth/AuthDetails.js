import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'

const AuthDetails = () => {
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

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }

    return (
        <div className='font-semibold text-sm md:text-base flex h-full group w-full content-center place-self-end text-black transition-all ease-in-out duration-700'>{authUser ?
            <>
                <div className='items-end rounded h-full bg-zinc-500 z-50 border-theme border-black p-1 px-2 group-hover:bg-zinc-400 drop-shadow-lift-hard transition-all ease-in-out duration-700'>
                    <p>{authUser.email}</p>
                    <div className='absolute top-8 right-0 group-hover:bg-zinc-500 border-theme border-black rounded opacity-0 group-hover:opacity-100 justify-around flex flex-col w-full bg-zinc-500 overflow-hidden h-0 group-hover:h-60 transition-all ease-in-out duration-700'>
                        <a className='p-2 m-2 rounded text-left bg-zinc-500 hover:bg-zinc-300 border-theme border-zinc-500 hover:border-black hover:drop-shadow-lift-hard transition-all ease-in-out duration-100' href="/home" >Account</a>
                        <a className='p-2 m-2 rounded text-left bg-zinc-500 hover:bg-zinc-300 border-theme border-zinc-500 hover:border-black hover:drop-shadow-lift-hard transition-all ease-in-out duration-100' href="/home" >Settings</a>
                        <a className='p-2 m-2 rounded text-left bg-zinc-500 hover:bg-zinc-300 border-theme border-zinc-500 hover:border-black hover:drop-shadow-lift-hard transition-all ease-in-out duration-100' href="/editor" >Editor</a>
                        <button className='p-2 m-2 rounded text-left bg-zinc-500 hover:bg-zinc-300 border-theme border-zinc-500 hover:border-black hover:drop-shadow-lift-hard transition-all ease-in-out duration-100' onClick={userSignOut}>Log out</button>
                    </div>
                </div>
            </>

            : <p>Signed Out</p>}</div >
    )
}

export default AuthDetails