import { Filtros } from "../controller/controllerFiltros.js"
import { LancaProdutosDashboard } from "../controller/produtosDashboard.js";
import { nossosProdutos } from "../controller/getProdutosController.js";

const filtroPanificadora = document.querySelector("#filtrar__panificadora");
const filtroBebida = document.querySelector("#filtrar__bebidas");
const filtroFrutas =  document.querySelector("#filtrar__frutas");
const mostrarTodos = document.querySelector("#filtrar__todos");
const campoPesquisa = document.querySelector("#pesquisa");
const todasCategorias = document.getElementById("filtros") 

const data = await nossosProdutos.getProdutos()

mostrarTodos.addEventListener("click", () => {
    LancaProdutosDashboard.lancarProdutos(Filtros.mostraTodosProdutos("churros",data))
})
filtroPanificadora.addEventListener("click", () => {
    LancaProdutosDashboard.lancarProdutos(Filtros.filtrarPanificadora("churros",data))
})
filtroBebida.addEventListener("click", () => {
    LancaProdutosDashboard.lancarProdutos(Filtros.filtrarBebidas("churros",data))
})
filtroFrutas.addEventListener("click", () => {
    LancaProdutosDashboard.lancarProdutos(Filtros.filtrarFrutas("churros",data))
})
campoPesquisa.addEventListener("input", (event) => {
    LancaProdutosDashboard.lancarProdutos(Filtros.filtroCampoBusca(event, "churros", data))
})
todasCategorias.addEventListener("click", Filtros.mudarTarget);
