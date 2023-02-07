export const searchQuery = (search) => {
    const query = (`*[_type == "post" && title match '${search}*'] {
    title,
    slug,
    body,
    author -> {
        name
    },
    publishedAt,
    mainImage {
        asset ->,
        alt
    },
    categories[]-> {title}
}`)

    const feedQuery = (`*[_type == "post"] | order(publishedAt desc, title) {
    title,
    slug,
    body,
    author -> {
        name
    },
    publishedAt,
    mainImage {
        asset ->,
        alt
    },
    categories[]-> {title}
}`)

    if (search === "") {
        return feedQuery
    }
    return query;
}