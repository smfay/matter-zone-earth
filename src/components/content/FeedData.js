import React from 'react'

export const feedQuery = (`*[_type == "post"] {
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
}`
)
