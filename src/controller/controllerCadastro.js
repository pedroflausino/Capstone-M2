class Cadastro {
    static cadastrar(data) {
        fetch('https://api-kenzie-food.herokuapp.com/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(resp => {
            if(typeof resp !== 'object'){
                alert(resp)
            }else{
                window.location = 'http://127.0.0.1:5501/src/pages/paginaLoginUser.html'
                return resp
            }
        })
        .catch(err => err)
    }
}