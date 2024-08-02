export const queryParams = (name = false) => {
    const explode = window.location.hash?.split('?');
    if (explode && window.location.hash?.includes('?')) {
        const params = explode[1]?.split('&');
        let query = {};
        if (params && params.length) {
            params.forEach((param) => {
                const [key, value] = param.split('=');
                query[key] = value;
            })
            if (name) return query[name];
            return query;
        }
    }
    return false;
}

export const objectToQueryParams = (object) => {
    let queryParams = '?';

    for (let key of Object.keys(object)) {
        let text = `${key} = ${object[key]}`
        queryParams += text + '&';
    }
    return queryParams.slice(0, -1);

}