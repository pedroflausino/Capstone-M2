const form = document.getElementById('register-form')

const tratarDadosECadastrar = (event) => {
    event.preventDefault()
    let dadosForm = [...form]
    const response = {}
    dadosForm.forEach(elemento => {
        if(elemento.name !== ''){
            response[elemento.name] = elemento.value
        }
    })
    Cadastro.cadastrar(response)
}
const cadastrarCliente = () => {
    form.addEventListener('submit', tratarDadosECadastrar)
}
cadastrarCliente()