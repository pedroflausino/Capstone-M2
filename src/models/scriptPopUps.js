const btnSucesso = document.querySelector(".btnSucesso");
const btnErro = document.querySelector(".btnErro");
const logout = document.querySelector("#hoverLogout");

btnSucesso.addEventListener("click", addHiddenSucesso);
btnErro.addEventListener("click", addHiddenErro);

function removeHiddenSucesso(){
    const status = document.querySelector(".sucesso");
    status.classList.remove("hidden");
}
function removeHiddenErro(){
    const status = document.querySelector(".erro");
    status.classList.remove("hidden");
}
function addHiddenSucesso(){
    const status = document.querySelector(".sucesso");
    status.classList.add("hidden");
}
function addHiddenErro(){
    const status = document.querySelector(".erro");
    status.classList.add("hidden");
}
logout.addEventListener("click", userLogout);

function userLogout(){
}