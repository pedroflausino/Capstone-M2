
class Filtros {
    static containerProdutos = document.querySelector("#container__produtos")

    static mostraTodosProdutos(renderiza, data) {
        if(typeof renderiza === "function"){
            data.forEach(produto => {
                renderiza(produto)
            })
        }
        return data
    }
    static filtrarPanificadora(renderiza, data) {
        this.containerProdutos.innerHTML = "";
        const listaPanificadora = data.filter(produto => produto.categoria === 'Panificadora')
        if (typeof renderiza === "function") {
            listaPanificadora.forEach(produto => {
                renderiza(produto)
            })
        }
        else {
            return listaPanificadora;
        }
    }
    static filtrarFrutas(renderiza, data) {
        this.containerProdutos.innerHTML = "";
        const listaFrutas = data.filter(produto => produto.categoria === 'Frutas')
        if (typeof renderiza === "function") {
            listaFrutas.forEach((produto) => {
                renderiza(produto)
            })
        }
        else{
            return listaFrutas;
        }
    }
    static filtrarBebidas(renderiza, data) {
        this.containerProdutos.innerHTML = "";
        const listaBebidas = data.filter(produto => produto.categoria === 'Bebidas')
        if (typeof renderiza === "function") {
            listaBebidas.forEach((produto) => {
                renderiza(produto)
            })
        }
        else {
            return listaBebidas;
        }
    }
    static mudarTarget() {
        let btnNav = document.querySelectorAll(".btn__nav");
        let botaoClicado = event.target;
        if (botaoClicado.id != "filtros") {
            btnNav.forEach((categoria) => {
                categoria.classList.remove("btn__clicado")
            })
            botaoClicado.classList.add("btn__clicado");
        }
    }
    static filtroCampoBusca(event, renderiza, data) {
        this.containerProdutos.innerHTML = "";
        const textoDigitado = event.target.value.trim().toLowerCase();
        let filtrado = data.filter((produto) => {
            if (produto.nome.toLowerCase().includes(textoDigitado) || produto.categoria.toLowerCase().includes(textoDigitado)) {
                return true;
            }
        });
        if (typeof renderiza === "function") {
            filtrado.forEach((produto) => {
                renderiza(produto);
            })
        }
        else {
            return filtrado;
        }
    }
}
export { Filtros }