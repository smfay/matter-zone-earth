export const searchQuery = (search) => {
    const query = (`*[_type == "post" && title match'${search}*'] {
    title,
    slug,
    body,
    approval,
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
    const feedQuery = (`*[_type == "post" && featured != true][0..10] | order(publishedAt desc, title) {
    title,
    slug,
    body,
    approval,
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