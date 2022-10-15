import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Feed from './Feed';
import CreateCard from './CreateCard';
import Card from './Card';
import Search from './Search';
import SearchBar from './SearchBar';

const Cards = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="px-2 md:px-5 py-24">
            <div className="p-4">
                <nav class="width-full h-64 bg-earth-500">
                    <SearchBar />
                </nav>
                <Layout />
            </div>
        </div>
    )
}

const Layout = ({ cards }) => {
    <section class="bg-earth-500">
        {cards?.map((post) => <Card key={post.slug.current} post={post} />)}
    </section>
}

export default Cards