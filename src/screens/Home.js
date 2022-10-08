import React from 'react'
import ContentCard from '../components/ContentCard'
import ContentGrid from '../components/ContentGrid'

export default function Home() {
  return (
    <div>
      Home
      <div class="p-10 flex justify-center space-x-10 columns-4">
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
