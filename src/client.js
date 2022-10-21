import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export default client({
    projectId: "x7moib4u",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-10-12",
})