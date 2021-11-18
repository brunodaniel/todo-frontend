const Api = {
    apiUrl: 'http://localhost:3001/tarefas',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchPost: (data) => {
        return fetch(`${Api.apiUrl}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }) 
    }
}

export default Api;