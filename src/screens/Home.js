import React from 'react'
import Logo from '../assets/svg/Logo'
import Cards from '../components/content/Cards'
import Feed from '../components/content/Feed'
import SearchBar from '../components/content/SearchBar'

export default function Home() {
  return (
    <>
      <header class="lg:px-32 h-96 bg-main drop-shadow-lift-hard text-transparent bg-fixed bg-clip-text flex flex-wrap justify-right border-black items-end p-8">
        <h2 class="font-black lg:text-8xl text-5xl">ZONE.<br />EARTH</h2>
        <h2 class="font-black lg:text-8xl text-5xl">MAT<br />TER</h2>
        <h2 class="font-black lg:text-8xl text-5xl">ZONE.<br />EARTH</h2>
      </header>
      <Logo class="fixed text-zinc-700 w-full" />
      <span class="px-20 p-10 flex flex-wrap space-x-2 justify-end items-end ">
        <SearchBar class="w-full" />
      </span>
      <main class="flex flex-wrap p-5">
        <section class="p-2 flex justify-center">
          <Feed />
        </section>
        <section class="p-2 flex flex-wrap justify-left content-start h-64 w-1/2 p-5">
          <h2 class="text-4xl font-bold"></h2>
        </section>
      </main>
    </>
  )
}
