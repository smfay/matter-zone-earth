import React from 'react'
import Logo from '../assets/svg/Logo'
import Feed from '../components/content/Feed'
import clickme from '../assets/images/clickme.gif'
import dude from '../assets/images/dude.png'

export default function Home() {
  return (
    <>
      <header className="lg:px-32 h-64 flex flex-wrap backdrop-contrast-[3] drop-shadow-lift-hard flex-wrap text-right text-zinc-200 justify-end border-black items-end p-8">
        <h2 className="font-black lg:text-5xl text-4xl animate-wiggle drop-shadow-lift-hard z-50">new!</h2>
        <img className="h-2/5 md:h-2/3 animate-wiggle-slow fixed z-40" src={dude}></img>
      </header>
      <main className="flex flex-wrap w-full p-2 lg:p-5 border-t-theme border-black">
        <section className="flex justify-center w-full">
          <Feed />
        </section>
      </main>
      <article className=" flex w-full justify-center text-zinc-200 items-end bg-gradient-to-t from-black to-transparent p-2 lg:p-5">
        <section className="w-full">
          <h2 className="text-2xl font-black w-full">you have reached the bottom of this page</h2>
          <p>please scroll back up, and stop snooping around</p>
        </section>
        <img src={clickme} className="relative" />
      </article>
    </>
  )
}
