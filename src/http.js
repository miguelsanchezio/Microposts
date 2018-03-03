class HTTPlib {
    // Make GET requesst
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make GET requesst
    async post(url, data) {
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        const resData = await response.json();
        return resData;
        
    }

    // Make PUT request
    async put(url, data) {
        const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        const resData = await response.json();
        return resData;
    }

    // Make DELETE request
    async delete(url) {
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
        const resData = await 'Resource successfully deleted.';
        return resData;
    }
}

export const http = new HTTPlib();