export class EditaProduto {
    static async editar(data) {
        const response = await fetch(
            `https://api-kenzie-food.herokuapp.com/my/products/${localStorage.getItem('idProduto')}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((error) => error);
        return response;
    }
}