const modalAdd = document.querySelector('.ExibirModal');
const form = document.createElement("form")
form.setAttribute("id", "modal")


export function criarModalCadastro() {
    form.innerHTML = ` <div class="cadastro"> 
    <h3 class="cabecalho">Cadastro de produto</h3>
    <span  class="removeModal">x</span>
    </div>

    <label class="Nomes" for="">Nome do produto</label>
    <input name="nome" class="CadastroInput" type="text" placeholder="Digite o nome">

    <label class="Nomes"for="">Descrição</label>
    <input name="descricao" class="CadastroDescricao" type="text" placeholder="Digitar a descrição">

    <label class="Nomes"for="">Categorias</label>
    <div name="categoria" class=" categoriasSpan">
     
    
    <input class="categorias" type="radio" id="panificadora" name="categoria" value="Panificadora">
    <label class="categorias" for="panificadora" >Panificadora</label>
    

   
    <input class=" categorias" type="radio" id="frutas" name="categoria"value="Frutas">
    <label class="categorias"  for="frutas">Frutas</label>
   

    
    <input class="categorias" type="radio" id="bebidas" name="Categoria" value="Bebidas">
    <label for="bebidas" class="categorias">Bebidas</label>
   

    </div>

    <label class="Nomes" for="">Valor do Produto</label>
    <input name="preco" class="CadastroInput"  type="text" placeholder="Digitar o valor aqui">

    <label class="Nomes" for="">Link da imagem</label>
    <input name="imagem" class="CadastroInput"  type="text" placeholder="Inserir Link">

    <button type="submit" class="btn"> Cadastrar Produto</button>`
    
    modalAdd.appendChild(form)
}



const removeModalEditar = document.getElementById('editaProduto')
const form2 = document.createElement("form")
form2.setAttribute("id", "modalEdita")


export function criarModalEditar() {
    form2.innerHTML = `
    <div class="cadastro"> 
    <h3 class="cabecalho">Editar produto</h3>
    <span id="removeModal" class="removeModal">x</span>
    </div>

    <label class="Nomes" for="">Nome do produto</label>
    <input name ="nome"class="CadastroInput" type="text" placeholder="Digite o nome">

    <label class="Nomes"for="">Descrição</label>
    <input name = "descricao" class="CadastroDescricao" type="text" placeholder="Digitar a descrição">

    <label class="Nomes"for="">categorias</label>
    <div class=" categoriasSpan">
     
    <input class="categorias" type="radio" id="01" name="categoria" value="Panificadora">
    <label class="categorias" for="01" >Panificadora</label>
    

   
    <input class=" categorias" type="radio" id="02" name="categoria"value="Frutas">
    <label class="categorias"  for="02">Frutas</label>
   

    
    <input class="categorias" type="radio" id="03" name="categoria" value="Bebidas">
    <label for="03" class="categorias">Bebidas</label>
      
    </div>

    <label class="Nomes" for="">Valor do Produto</label>
    <input name="preco" class="CadastroInput"  type="text" placeholder="Digitar o valor aqui">

    <label class="Nomes" for="">Link da imagem</label>
    <input name="imagem" class="CadastroInput"  type="text" placeholder="Inserir Link">

    <div class="botoes">
        <button class="btnExclui"> Excluir</button>
        <button class="btnSalva">Salvar alterações</button>
    </div>
    `
    removeModalEditar.append(form2)    

}



const addModalRemove = document.getElementById('removeProduto')
const form3 = document.createElement("form")
form3.setAttribute("id", "modalRemove")

export function CriaModalRemove() {
    form3.innerHTML =`
    <div class="cadastro"> 
                <h3 class="cabecalho">Exclusão de produto</h3>
                <span class="removeModal">x</span>
            </div>
            
            <p class="remover">Tem certeza que deseja exluir este produto?</p>
    
            <div class="botoes">
                <button class="sim"> sim</button>
                <button class="nao">nao</button>
            </div>
    `
    addModalRemove.append(form3)
}
