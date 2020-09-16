const base_url = "https://reqres.in";

const ApiService = async (url, options) => {
    const finalURL = base_url + url;
    const {method, body} = {...options};
    const requestOptions = {
        method: method && method !== "" ? method.toUpperCase() : "GET",
		headers: {
			'Accept': 'application/json',
			'content-type': 'application/json',
			'Accept-Language': 'en-US'
        }
    }

    if(method && method.toUpperCase() === "POST" && body && Object.keys(body).length) {
        requestOptions.body = JSON.stringify(body);
    }

    return await fetch(finalURL, requestOptions).then(response => response.json());
};

export default ApiService;