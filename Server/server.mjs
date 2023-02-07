import sanity from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { searchQuery } from './FeedData.mjs'

let client = sanity({
    projectId: "x7moib4u",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-10-12",
})

client.fetch(searchQuery("Denote"))
    .then(data => console.log(data))

