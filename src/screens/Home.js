import React from 'react'
import ContentCard from '../components/ContentCard'
import ContentGrid from '../components/ContentGrid'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div class="flex flex-wrap justify-evenly">
      <Banner></Banner>
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
