import { queryParams } from "./helper.js";

export const menuComponent = () => {
    const uiNavbar = document.querySelector('#navbar');
    const category = queryParams('category');

    const template = (data) => {

        let className = 'relative flex items-center px-[31px] pt-[12px] pb-[14px] text-[15px] font-bold';

        if (category === data.slug) {
            className += ' bg-[#2F9FF810] text-[#2F9FF8] rounded-[0_37px_37px_0] font-bold '
        } 

        return `
            <div class="${className}">
                <a class="absolute inset-0" href="#search?category=${data.slug}"></a>
                <figure class="mr-[22px] size-[24px]">
                    <img src="./assets/img/home.svg" alt="">
                </figure>
                <span>${data.name}</span>
            </div>
        `
    }

    const fetchData = async () => {
        const api = await fetch('https://all-api.bitcode.az/api/news/category');
        const categories = await api.json();

        uiNavbar.innerHTML = '';
        categories.forEach(category => {
            uiNavbar.innerHTML += template(category);
        })
    }

    fetchData();
}