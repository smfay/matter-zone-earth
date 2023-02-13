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
        <div className='text-sm md:text-base flex space-x-4 group content-center place-self-end text-zinc-300 transition-all ease-in-out duration-700'>{authUser ?
            <>
                <div className='flex flex-col items-end rounded top-4 drop-shadow-lift-down transition-all ease-in-out duration-700'>
                    <p>{authUser.email}</p>
                    <div className='rounded opacity-0 group-hover:opacity-100 justify-around flex flex-col w-full bg-zinc-900 overflow-hidden h-0 group-hover:h-60 transition-all ease-in-out duration-700'>
                        <a className='p-2 m-2 rounded text-left hover:bg-zinc-800' href="/home" >Account</a>
                        <a className='p-2 m-2 rounded text-left hover:bg-zinc-800' href="/home" >Settings</a>
                        <a className='p-2 m-2 rounded text-left hover:bg-zinc-800' href="/editor" >Editor</a>
                        <button className='p-2 m-2 rounded text-left hover:bg-zinc-800' onClick={userSignOut}>Log out</button>
                    </div>
                </div>
            </>

            : <p>Signed Out</p>}</div >
    )
}

export default AuthDetails