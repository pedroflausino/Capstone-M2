class PegarProdutos{
    static async getProdutos(){
        return fetch('https://api-kenzie-food.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then (resp => resp)
        .catch(err => err)
    }
}

class nossosProdutos{
    static async getProdutos(){
        return fetch('https://api-kenzie-food.herokuapp.com/my/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then (resp => resp)
        .catch(err => err)
    }
}

export { PegarProdutos , nossosProdutos}