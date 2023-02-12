import React from 'react'
import Logo from '../assets/svg/Logo'
import Feed from '../components/content/Feed'
import clickme from '../assets/images/clickme.gif'
import dude from '../assets/images/dude.png'
import SideBar from '../components/content/SideBar'
import Featured from '../components/content/Featured'


export default function Home() {
  return (
    <>
      <Featured className='' />
      <main className="space-x-2 w-full justify-center p-4 md:px-12 lg:px-32">
        <section className="flex justify-center">
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
