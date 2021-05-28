const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone")
const botao = document.querySelector("#button");

function validate() {
    if (nome.value != "" && email.value != "" && telefone.value != "") {
        alert("Em breve você receberá mais informações no seu email!");
    } 
     else {
        alert("Preencher campos");
    }
}

botao.addEventListener("click", validate);