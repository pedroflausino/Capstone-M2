import { Filtros } from "../controller/controllerFiltros.js"
import { renderizacaoProdutos } from "./renderizarProdutos.js"
import { PegarProdutos } from "../controller/getProdutosController.js";

const filtroPanificadora = document.querySelector("#filtrar__panificadora");
const filtroBebida = document.querySelector("#filtrar__bebidas");
const filtroFrutas =  document.querySelector("#filtrar__frutas");
const mostrarTodos = document.querySelector("#botao__todos");

const data = await PegarProdutos.getProdutos();

mostrarTodos.addEventListener("click", () => {
    Filtros.mostraTodosProdutos(renderizacaoProdutos, data)
})
filtroPanificadora.addEventListener("click", () => {
    Filtros.filtrarPanificadora(renderizacaoProdutos, data)
})
filtroBebida.addEventListener("click", () => {
    Filtros.filtrarBebidas(renderizacaoProdutos, data)
})
filtroFrutas.addEventListener("click", () => {
    Filtros.filtrarFrutas(renderizacaoProdutos, data)
})

const todasCategorias = document.getElementById("filtros") 
todasCategorias.addEventListener("click", Filtros.mudarTarget);

const campoPesquisa = document.querySelector(".pesquisa");
campoPesquisa.addEventListener("input", (event) => {
    Filtros.filtroCampoBusca(event, renderizacaoProdutos, data);
})