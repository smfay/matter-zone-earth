import React from 'react'
import Logo from '../assets/svg/Logo'
import Feed from '../components/content/Feed'
import clickme from '../assets/images/clickme.gif'
import wow from '../assets/images/wow.png'

export default function Home() {
  return (
    <>
      <header class="lg:px-32 h-64 backdrop-contrast-[3] flex flex-wrap drop-shadow-lift-hard flex-wrap text-right text-zinc-200 justify-end border-black items-end p-8">
        <h2 class="font-black lg:text-8xl text-7xl animate-wiggle drop-shadow-lift-hard z-50">new!</h2>
        <img class="h-2/3 animate-wiggle-slow fixed z-40" src={wow}></img>
      </header>
      <main class="flex flex-wrap w-full p-2 lg:p-5 border-t-theme border-black">
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
