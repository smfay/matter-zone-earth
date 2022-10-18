import React from 'react'

export const feedQuery = (`*[_type == "post"] | order(publishedAt desc, title) {
    title,
    slug,
    body,
    author -> {
        name
    },
    publishedAt,
    mainImage {
        asset -> {
            _id,
            url
        },
        alt
    },
    categories[]-> {title}
}[0...5]`
)
