import React from 'react'
import ContentCard from '../components/ContentCard'
import ContentGrid from '../components/ContentGrid'

export default function Home() {
  return (
    <div class="p-5 flex flex-wrap justify-evenly">
      <h1 class="text-6xl font-black">HOME</h1>
      <div class="sm:p-1 md:p-2 lg:p-5 flex flex-wrap justify-center">
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
