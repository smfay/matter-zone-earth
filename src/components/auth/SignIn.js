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
        <div className='border-theme rounded border-black bg-zinc-400 items-between block h-80 p-4'>

            <div className='flex flex-col rounded align-start text-black'>
                {loginMode ?
                    <button className='place-self-end' onClick={handleModeSwitch}>Create an account -></button>
                    :
                    <button className='place-self-end' onClick={handleModeSwitch}>I already have an account -></button>
                }
            </div>


            {loginMode ?
                <form onSubmit={signIn} className='flex flex-col h-full rounded items-between space-y-4 text-black'>
                    <h1 className='font-semibold text-3xl'>Log In</h1>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className=''
                    ></input>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className=''
                    ></input>
                    <button className='rounded-full text-black bg-green-600 hover:bg-amber-600 border-theme border-black w-fit h-12 w-12 p-2 place-self-end hover:drop-shadow-lift-hard transition-all ease-in-out duration-300' type='submit'> -> </button>
                </form>
                :
                <form onSubmit={signUp} className='flex flex-col h-full rounded items-between space-y-4 text-black'>
                    <h1 className='font-semibold text-3xl'>Sign up</h1>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className=''
                    ></input>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className=''
                    ></input>
                    <button className='rounded-full text-black bg-green-600 hover:bg-amber-600 border-theme border-black w-fit h-12 w-12 p-2 place-self-end hover:drop-shadow-lift-hard transition-all ease-in-out duration-300' type='submit'> -> </button>
                </form>
            }
        </div>
    )
}

export default SignIn