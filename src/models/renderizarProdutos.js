import { PegarProdutos } from "../controller/getProdutosController.js";
import { CarrinhoController } from "../controller/carrinhoCompras.js"
import { Filtros } from "../controller/controllerFiltros.js"

let data = await PegarProdutos.getProdutos();

const containerProdutos = document.getElementById('container__produtos')

const renderizacaoProdutos = (produto) => {

    const cardProdutos = document.createElement('section')
    cardProdutos.classList.add('card__produtos')
    containerProdutos.append(cardProdutos)

    const imgProduto = document.createElement('img')
    imgProduto.classList.add('imagem__produto')
    imgProduto.src = produto.imagem
    cardProdutos.append(imgProduto)

    const tituloProduto = document.createElement('h2')
    tituloProduto.innerText = produto.nome
    cardProdutos.append(tituloProduto)

    const descProduto = document.createElement('p')
    descProduto.classList.add('desc__produtos')
    descProduto.innerText = produto.descricao
    cardProdutos.append(descProduto)

    const categProdutos = document.createElement('span')
    categProdutos.innerText = produto.categoria
    cardProdutos.append(categProdutos)

    const sectionPrecoEBotao = document.createElement('section')
    sectionPrecoEBotao.classList.add('section__preco__botao')
    cardProdutos.append(sectionPrecoEBotao)

    const precoProduto = document.createElement('p')
    precoProduto.classList.add('preco__produto')
    precoProduto.innerText = `R$ ${produto.preco}`
    sectionPrecoEBotao.append(precoProduto)

    const botaoCarrinho = document.createElement('button')
    const imagemBotaoCarrinho = document.createElement('img')
    imagemBotaoCarrinho.src = '../img/botaoCarrinho.svg'
    imagemBotaoCarrinho.classList.add('imagem__botao__carrinho')
    botaoCarrinho.setAttribute("id", `${produto.id}`)
    botaoCarrinho.append(imagemBotaoCarrinho)
    sectionPrecoEBotao.append(botaoCarrinho);

    const btnAddCarrinho = document.getElementById(`${produto.id}`)
    btnAddCarrinho.addEventListener("click", () => {
        CarrinhoController.adicionarCarrinho(produto)
    })
}
const lancarProdutosPublicos = (data) => {
    data.forEach(produto => {
        renderizacaoProdutos(produto)
    })
}

lancarProdutosPublicos(data)

export { renderizacaoProdutos }