import { criarModalCadastro } from "../models/modalModel.js";
import { criarModalEditar } from "../models/modalModel.js"
import { CriaModalRemove } from "../models/modalModel.js"
import { CadastroProduto } from "../controller/cadastroProduto.js"
import { ExcluiProduto } from "./deleteProduto.js"
import { EditaProduto } from "../controller/patchEditaProduto.js"

criarModalCadastro()
criarModalEditar()
CriaModalRemove()



const btnAddProduto = document.getElementById('add_produtos');
btnAddProduto.addEventListener("click", modalAddProduto);
const modalAdd = document.querySelector('.ExibirModal');

function modalAddProduto() {
    modalAdd.style.display = 'block';
}


const removeModal = document.querySelector('.removeModal');
removeModal.addEventListener("click", removeModaladdProduto);


function removeModaladdProduto() {
    modalAdd.style.display = 'none';
}


export function modalEditaProduto(event) {
    removeModalEditar.style.display = 'block';
    localStorage.setItem('idProduto', event.target.id)
}
const removeModalEditar = document.getElementById('editaProduto')


const removeModalEdita = document.getElementById('removeModal');
removeModalEdita.addEventListener("click", removeModaleditaProduto)

function removeModaleditaProduto() {
    removeModalEditar.style.display = 'none';
}


const removeModalRemover = document.getElementById('removeProduto')

export function modalRemoverProduto() {
    removeModalRemover.style.display = 'block';
}

const btnNaoRemove = document.querySelector('.nao')
btnNaoRemove.addEventListener("click" ,naoRemoverProduto)

function naoRemoverProduto() {
    removeModalRemover.style.display = 'none';
}




const formCadastro = document.querySelector(".ExibirModal")
async function cadastraProduto(event) {
    event.preventDefault()

    const inputs = event.target
    console.log(inputs)
    const dadosProduto = {}
    
    for (let i = 0; i < inputs.length; i++) {
        const { name, value } = inputs[i]

        if (name) {
            
            if (name != "Categoria") {
                dadosProduto[name] = value
            } else if (inputs[i].checked) {
                dadosProduto[name] = value
               
            }
        }
    }
    await CadastroProduto.cadastrar(dadosProduto)
}
formCadastro.addEventListener("submit", cadastraProduto)





const form = document.getElementById("modalEdita")
console.log(form)
async function valoresInputEdita(event) {
    event.preventDefault()
        
    // const id = event.target.id
    const inputs = event.target
    const dadosProduto = {}
    
    for (let i = 0; i < inputs.length; i++) {
        const { name, value } = inputs[i]

        if (name) {
            
            if (name != "Categoria") {
                dadosProduto[name] = value
            } else if(inputs[i].checked) {
                dadosProduto[name] = value
            }
        }
    }
    EditaProduto.editar(dadosProduto)
    console.log(dadosProduto)
}
form.addEventListener("submit", valoresInputEdita)




const btnExclui = document.querySelector(".btnExclui")

async function btnExcluirModalEditar(event) {
    event.preventDefault()
    localStorage.setItem('deleteProduto', event.target.id);

    await ExcluiProduto.Excluir()
       // RENDERIZAR TELA
}
btnExclui.addEventListener("click" , btnExcluirModalEditar)





const btnNaoRemoveSim = document.querySelector('.sim')
async function excluirProduto(event) {
    event.preventDefault()

        // const id = event.target.id;
        // await ExcluiProduto.Excluir(id) 
       // RENDERIZAR TELA
}

btnNaoRemoveSim.addEventListener("click", excluirProduto)
