export const serviceFetchNews = async (queryParams = '') => {
    const api = await fetch('https://all-api.bitcode.az/api/news' + queryParams);
    return await api.json();
}

export const serviceFetchNewsView = async (slug) => {
    const api = await fetch('https://all-api.bitcode.az/api/news/slug/' + slug);
    return await api.json();
}