import React from 'react'
import ContentCard from '../components/ContentCard'
import ContentGrid from '../components/ContentGrid'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div class="py-32 flex flex-wrap justify-left backdrop-blur-lg backdrop-brightness-50">
      <h1 class="flex m-16 text-6xl font-black"></h1>
      <div class="sm:p-1 md:p-2 lg:p-32 flex flex-wrap py-64 justify-center ">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  )
}
