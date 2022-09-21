import { nossosProdutos, PegarProdutos } from "./getProdutosController.js";
import { modalEditaProduto, modalRemoverProduto } from "../controller/ModalDashboard.js";

const data = await nossosProdutos.getProdutos();

class LancaProdutosDashboard{
    static containerProdutos = document.querySelector("#container__produtos")

    static async lancarProdutos(produtos){
        await produtos.forEach(produto=>{
            this.lancarUm(produto);
        });
    }

    static async lancarUm(data){
        const ul = document.createElement("ul");
        ul.classList.add("produto");

        const li = document.createElement("li");

        const img = document.createElement("img");
        img.classList.add("img_produto");
        img.src = `${data.imagem}`;
        const p = document.createElement("p");
        p.classList.add("nome_produto");
        p.innerText = `${data.nome}`;
        li.append(img, p);

        const li_2 = document.createElement("li");
        const p_2 = document.createElement("p");
        p_2.classList.add("nome_categorias");
        p_2.innerText = `${data.categoria}`;
        li_2.append(p_2);

        const li_3 = document.createElement("li");
        const p_4 = document.createElement("p");
        p_4.innerText = `${data.descricao.slice(0,39)}...`;
        li_3.append(p_4);

        const li_4 = document.createElement("li");
        const btnEditar = document.createElement("i");
        btnEditar.setAttribute("id", `${data.id}`);
        btnEditar.classList.add("botao", "fa-solid", "fa-pen-to-square");

        const btnExcluir = document.createElement("i");
        btnExcluir.setAttribute("id", `${data.id}`)
        btnExcluir.classList.add("botao", "btn_2", "fa-solid", "fa-trash");
        li_4.append(btnEditar, btnExcluir);

        ul.append(li, li_2, li_3, li_4);

        this.containerProdutos.append(ul);

        btnEditar.addEventListener("click", modalEditaProduto)
        btnExcluir.addEventListener("click", modalRemoverProduto)

    }
}
LancaProdutosDashboard.lancarProdutos(data);
export { LancaProdutosDashboard }

