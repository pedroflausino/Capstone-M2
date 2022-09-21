const form = document.getElementById('register-form')

const filtrarDadosForm = (event) => {
    event.preventDefault()
    const data = {}
    let dadosForm = [...form]
    dadosForm.forEach(elemento => {
      if(elemento.name !== ''){
          data[elemento.name] = elemento.value
      }
    })
    Login.logar(data)
}

const logar = () => {
    form.addEventListener('submit', filtrarDadosForm)
}
logar()