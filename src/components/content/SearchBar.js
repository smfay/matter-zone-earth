import React from 'react'

const SearchBar = () => {
    return (
        <div class="space-x-2">
            <input class="bg-zinc-100 border-[0.15em] rounded-lg border-black px-4" placeholder='Search' ></input>
            <button class="font-bold uppercase bg-zinc-200 border-black border-[0.15em] rounded px-3">GO!</button>
        </div>
    )
}

export default SearchBar