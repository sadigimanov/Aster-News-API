class Router {
    constructor() {
        this.routes = {};
        this.rootElement = document.querySelector('#root');
        window.addEventListener('hashchange', this.hashChange.bind(this))
        window.addEventListener('load', this.hashChange.bind(this))
    }

    hashChange() {
        const [customUrl, param] = window.location.hash.slice(1).split('/');
        let page = this.routes[customUrl];
        let url = customUrl;

        if(customUrl.includes('?')){
            const url = customUrl.split('?');
            page = this.routes[url[0]];
        }
        
        if(!url) {
            window.location.href = '#home';
        }
        if(page && page.url) {
            this.loadPage(page.url, {
                callback: page.callback,
                param
            });
        }
        else { 
            this.loadPage('error.html');
        } 
    }

    async loadPage(url, option) {
        const res = await fetch(`/pages/${url}`);
        const html =  await res.text();
        this.rootElement.innerHTML = html; 

        if (option && option.callback) {
            option.callback(option.param);
        }
    }

    addRoute(name, url, callback) {
        this.routes[name] = {
            url,
            callback
        };
    }
}

export default Router;