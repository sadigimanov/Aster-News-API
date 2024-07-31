import Router from "./router.js";
import { serviceFetchNews, serviceFetchNewsView } from "./service.js";
import { uiLoading, uiNewsItem } from "./ui.js";

const router = new Router()

router.addRoute('home', 'home.html', async () => {
    const newsContent = document.querySelector('#news-content');
    const showMore = document.querySelector('#show_more');

    const fetchNews = async (page = 1) => {
        if(page === 1) uiLoading('show');
        const res = await serviceFetchNews(page);
        uiLoading('hide');

        res.data.forEach(item => {
            newsContent.innerHTML += uiNewsItem(item);
        });
    }
    fetchNews();

    showMore.addEventListener('click', (e) => {
        const page = e.target.getAttribute('data-page');
        e.target.setAttribute('data-page', parseInt(page) + 1);
        fetchNews(parseInt(page) + 1); 
    })
});
router.addRoute('view', 'view.html', async (slug) => {
    uiLoading('show');
    const news = await serviceFetchNewsView(slug);
    uiLoading('hide');
    const title = document.querySelector('#title');
    const photo = document.querySelector('#photo');
    const category = document.querySelector('#category');
    const content = document.querySelector('#content');
    const publishedDate = document.querySelector('#published_date');
    const author = document.querySelector('#author');

    if (news) {
        title.innerHTML = news.title;
        category.innerHTML = news.category.name;
        category.href = `#search?category=${news.category.slug}`;
        photo.src = news.photo;
        content.innerHTML = news.content;
        publishedDate.innerHTML = moment(news.published_date).format('DD-MM-YYYY HH:mm');
        author.innerHTML = `by ${news.author.fullname}`;
    }
});
console.log(moment());