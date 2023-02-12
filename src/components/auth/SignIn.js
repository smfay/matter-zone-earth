import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMode, setloginMode] = useState("false")

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleModeSwitch = async (e) => {
        e.preventDefault()
        setloginMode(!loginMode)
        setEmail('')
        setPassword('')
    }

    return (
        <div>

            <div className='flex flex-col rounded align-start p-4 space-y-4 text-zinc-300'>
                {loginMode ?
                    <button className='place-self-end' onClick={handleModeSwitch}>Create an account -></button>
                    :
                    <button className='place-self-end' onClick={handleModeSwitch}>I already have an account -></button>
                }
            </div>


            {loginMode ?
                <form onSubmit={signIn} className='flex flex-col rounded align-start p-4 space-y-4 text-zinc-300'>
                    <h1 className='font-semibold text-3xl text-zinc-300'>Log In</h1>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className='text-zinc-300 bg-zinc-800 rounded px-4 transition-all h-8 ease-in-out duration-700'
                    ></input>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className='text-zinc-300 bg-zinc-800 rounded px-4 transition-all h-8 ease-in-out duration-700'
                    ></input>
                    <button className='rounded-full text-zinc-300 bg-green-600 w-fit h-12 w-12 p-2 place-self-end' type='submit'> -> </button>
                </form>
                :
                <form onSubmit={signUp} className='flex flex-col rounded align-start p-4 space-y-4 text-zinc-300'>
                    <h1 className='font-semibold text-3xl text-zinc-300'>Sign Up</h1>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className='text-zinc-300 bg-zinc-800 rounded px-4 transition-all h-8 ease-in-out duration-700'
                    ></input>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className='text-zinc-300 bg-zinc-800 rounded px-4 transition-all h-8 ease-in-out duration-700'
                    ></input>
                    <button className='rounded-full text-zinc-300 bg-green-600 w-fit h-12 w-12 p-2 place-self-end' type='submit'> -> </button>
                </form>
            }
        </div>
    )
}

export default SignIn