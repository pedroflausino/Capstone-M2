class Login{
    static logar(data){
        fetch('https://api-kenzie-food.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((resp) => {
            console.log(resp)
            if(resp.error !== undefined){
                alert(resp.error)
            }else{
                localStorage.setItem('token', resp)
                window.location = 'http://127.0.0.1:5501/src/pages/paginaDashboard.html'
                return resp
            }
        })
    }
}