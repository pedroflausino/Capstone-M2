
export class ExcluiProduto {
    static async Excluir() {
        const response = await fetch(`https://api-kenzie-food.herokuapp.com/my/products/${localStorage.getItem('idProduto')}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
            .then((res) => res.json())
            .then((res) => res)
            .catch((error) => error);
        return response;
    }
}