export const featuredQuery = () => {
    const query = (`*[_type == "post" && featured == true] {
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
    return query;
}