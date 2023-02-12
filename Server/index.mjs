import express from 'express'
import { searchQuery } from './FeedData.mjs'
import { featuredQuery } from './FeaturedPost.mjs'
const app = express()
const port = process.env.PORT || 3001
import cors from 'cors'

import sanity from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

let client = sanity({
    projectId: "x7moib4u",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-10-12",
})

app.use(cors())

app.get('/posts/featured', async (req, res) => {
    let data = await client.fetch(featuredQuery())
    res.json(data);
})

app.get('/posts', async (req, res) => {
    let search = req.query.q
    console.log(search)
    let data = await client.fetch(searchQuery(search))
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});