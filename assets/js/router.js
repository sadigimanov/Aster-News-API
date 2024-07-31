class Router {
    constructor() {
        this.routes = {};
        this.rootElement = document.querySelector('#root');
        window.addEventListener('hashchange', this.hashChange.bind(this))
        window.addEventListener('load', this.hashChange.bind(this))
    }

    hashChange() {
        const [url, param] = window.location.hash.slice(1).split('/');
        const page = this.routes[url];

        
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