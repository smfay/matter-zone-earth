import React from 'react'
import Logo from '../assets/svg/Logo'
import Cards from '../components/content/Cards'
import Feed from '../components/content/Feed'
import SearchBar from '../components/content/SearchBar'

export default function Home() {
  return (
    <>
      <header class="lg:px-32 h-64 backdrop-contrast-[2] flex drop-shadow-lift-hard flex-wrap text-right text-zinc-200 justify-end border-black items-end p-8">
        <h2 class="font-black lg:text-8xl text-7xl">new!</h2>
      </header>
      <span class="px-20 p-3 flex flex-wrap space-x-2 justify-end w-full items-center bg-zinc-500 border-black border-t-[0.15em] border-b-[0.15em]">
        <button class="uppercase bg-zinc-200 border-black border-[0.15em] rounded px-3">boioioing</button>
        <button class="uppercase bg-zinc-200 border-black border-[0.15em] rounded px-3">Sort</button>
        <button class="uppercase bg-zinc-200 border-black border-[0.15em] rounded px-3">Category</button>
        <SearchBar class="w-full" />
      </span>
      <main class="flex flex-wrap p-0 lg:p-5">
        <section class="p-2 flex justify-center w-full">
          <Feed />
        </section>
        <section class="p-2 flex flex-wrap justify-left content-start h-64 w-1/2 p-5">
          <h2 class="text-4xl font-bold"></h2>
        </section>
      </main>
    </>
  )
}
