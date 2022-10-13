import React from 'react'
import ContentCard from '../components/ContentCard'
import ContentGrid from '../components/ContentGrid'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
      <div class="bg-gradient-to-r from-zinc-600 to-zinc-500 h-full w-full lg:p-12 flex flex-row justify-center block flex-wrap bg-zinc-500 border-t-[1px] border-b-[1px] border-zinc-700">
        <div class="cshadow-inner lg:m-6 sm:p-1 md:p-2 lg:px-0 flex flex-wrap md:w-full lg:w-2/3 h-full justify-left m-0">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
        <div class="shadow-inner drop-shadow-[0px_25px_20px_rgba(1,1,1,0.3)] ring-zinc-400 ring-2 rounded-lg border-zinc-700 border-[1px] py-1 px-12 flex flex-wrap py-12 w-full lg:w-1/4 h-full justify-left place-self-center bg-zinc-500">
          <h1 class="text-zinc-900 text-6xl font-black font-willump">Lorem ipsum dolor sit amet</h1>
          <p class="text-zinc-800">Amet mauris commodo quis imperdiet massa tincidunt. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Quis blandit turpis cursus in hac habitasse platea dictumst. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum id venenatis. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Quis risus sed vulputate odio. Turpis egestas maecenas pharetra convallis posuere morbi leo. Imperdiet dui accumsan sit amet nulla facilisi. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Id diam vel quam elementum pulvinar etiam.</p>
        </div>
      </div>
      <div class="bg-zinc-500 h-96">
      </div>
    </>
  )
}
