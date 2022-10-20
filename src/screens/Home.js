import React from 'react'
import Logo from '../assets/svg/Logo'
import Feed from '../components/content/Feed'
import clickme from '../assets/images/clickme.gif'
import matter from '../assets/images/matter.png'

export default function Home() {
  return (
    <>
      <header class="lg:px-32 h-64 backdrop-contrast-[2] flex drop-shadow-lift-hard flex-wrap text-right text-zinc-200 justify-end border-black items-end p-8">
        <h2 class="font-black lg:text-8xl text-7xl animate-wiggle">new!</h2>
      </header>
      <span class="px-20 p-3 flex flex-wrap space-x-2 justify-end w-full items-center bg-zinc-500 border-black border-t-[0.15em] border-b-[0.15em]">
      </span>
      <main class="flex flex-wrap w-full p-2 lg:p-5">
        <section class="flex justify-center w-full">
          <Feed />
        </section>
      </main>

      <article class=" flex w-full justify-center text-zinc-200 items-end bg-gradient-to-t from-black to-transparent p-2 lg:p-5">
        <section class="w-full">
          <h2 class="text-2xl font-black w-full">you have reached the bottom of this page</h2>
          <p>please scroll back up, and stop snooping around</p>
        </section>
        <img src={clickme} class="relative" />
      </article>
    </>
  )
}
