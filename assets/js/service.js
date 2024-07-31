export const serviceFetchNews = async () => {
    const api = await fetch('https://all-api.bitcode.az/api/news');
    return await api.json();
}