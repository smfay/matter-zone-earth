import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from './client'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
    return builder.image(source)
}