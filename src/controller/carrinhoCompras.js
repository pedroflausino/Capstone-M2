class CarrinhoController {
    static containerCarrinho = document.querySelector("#container__carrinho")
    static containerProdutosCarrinho = document.querySelector(".container__productsCardCart");
    static quantidadeProdutos = document.createElement("section")

    static adicionarCarrinho(item) {
        const produtoCardCart = document.createElement("section");
        produtoCardCart.classList.add("productCardCart");

        produtoCardCart.innerHTML = `
    <figure class="img__cardCart">
        <img src="${item.imagem}" alt="">
    </figure>
    <div>
        <div>
            <h4>${item.nome}</h4> <i class="remove icone__lixeira fa-solid fa-trash"></i>
        </div>
        <p class="categoria__carrinho">${item.categoria}</p>
        <p><span class="preco__carrinho">R$: ${item.preco}</span></p>
    </div>`
        this.containerProdutosCarrinho.append(produtoCardCart);

        const btnRemove = document.querySelectorAll(".remove")

        btnRemove.forEach(btn => btn.addEventListener("click", (evt) => {
            evt.target.parentElement.parentElement.parentElement.remove();
            this.verificaCarrinho();
        }))
        this.verificaCarrinho();
    }
    static verificaCarrinho() {
        let tam = this.containerProdutosCarrinho.childElementCount;

        this.quantidadeProdutos.classList.add("total__carrinho", "hidden")
        const bodyCarrinhoVazio = document.querySelector(".body__carrinhoVazio")

        if (tam != 0) {
            bodyCarrinhoVazio.classList.add("hidden");
            this.containerProdutosCarrinho.classList.remove("hidden")
            this.quantidadeProdutos.classList.remove("hidden")
        }
        else {
            bodyCarrinhoVazio.classList.remove("hidden");
            this.containerProdutosCarrinho.classList.add("hidden")
            this.quantidadeProdutos.classList.add("hidden")
        }
        this.atualizaValorTotal(tam);
    }
    static atualizaValorTotal(tam) {
        const preco = document.querySelectorAll(".preco__carrinho");
        let soma = 0;
        for (let i = 0; i < preco.length; i++) {
            soma += parseFloat(preco[i].innerText.replace("R$: ", ""));
        }
        soma = Math.round(soma * 100) / 100;

        this.quantidadeProdutos.innerHTML = "";
        this.quantidadeProdutos.innerHTML = `<div><h5>Quantidade:</h5> <span id="quantidadeItensCarrinho">${tam}</span></div>
    <div class="quantidade__carrinho"><h5>Total:</h5><span id="precoTotalCarrinho">R$: ${soma}</span></div>`;
        this.containerCarrinho.append(this.quantidadeProdutos);

    }
}

export { CarrinhoController }