import Router from "./router.js";
import { serviceFetchNews } from "./service.js";
import { uiNewsItem } from "./ui.js";

const router = new Router()

router.addRoute('home', 'home.html', async () => {
    const newsContent = document.querySelector('#news-content');
    const res = await serviceFetchNews();
    newsContent.innerHTML = '';
    res.data.forEach(item => {
        newsContent.innerHTML += uiNewsItem(item);
    })
});
router.addRoute('view', 'view.html', (slug) => {

});