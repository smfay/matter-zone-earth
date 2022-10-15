import React from 'react'
import Cards from '../components/content/Cards'
import Feed from '../components/content/Feed'

export default function Home() {
  return (
    <>
      <main class="pt-64">
        <section class="p-2">
          <Feed />
        </section>
      </main>
    </>
  )
}
