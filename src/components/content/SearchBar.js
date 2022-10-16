import React from 'react'

const SearchBar = () => {
    return (
        <div class="space-x-2">
            <input class="bg-zinc-100 border-[0.15em] rounded-full border-black px-4" placeholder='Search' ></input>
            <button class="font-bold ">GO</button>
        </div>
    )
}

export default SearchBar