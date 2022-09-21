
export class CadastroProduto {
    static async cadastrar(data) {
        
        const response = await fetch(
            `https://api-kenzie-food.herokuapp.com/my/products`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                if(typeof res.error === 'string'){
                    removeModaladdProduto()
                }else{
                }
            })
            .catch((error) => error);
             return response;
    }
}