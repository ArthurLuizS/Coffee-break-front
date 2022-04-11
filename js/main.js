//import { cadastrar } from "./request.js";

const url = "http://localhost:8080/funcionarios"
const url2 = "http://localhost:8080/funcionarios/cadastrar"

let form = document.getElementById("form");
let botao = document.getElementById("btn-submit");

function cadastrarFunc() {
    let nome =  document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let alimento = document.getElementById("alimento").value;
    let url = "http://localhost:8080/funcionarios/cadastrar"
    event.preventDefault();
    funcionario = {
        "nome": nome,
        "cpf": cpf,
        "alimento": alimento
    };

    cadastrar(url2, funcionario);

}
function cadastrar(url, funcionario){
    event.preventDefault();
// console.log("funcionario = ", funcionario)
axios.post(url, funcionario)
     .then(response =>  {
         console.log(JSON.stringify(response.data))
         listar()
     })
     
     .catch(error => alert( error.response.data.message)) 
}


function criaLinha(funcionario){
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdAlimento = document.createElement("td");
    tdEditar = document.createElement("td")
    

    //tdEditar.innerAtribute = href="https://www.w3schools.com";
    tdEditar.innerHTML = `<a href="http://127.0.0.1:5500/tela2.html">Editar<a/>`;
    tdNome.innerHTML = funcionario.nome;
    tdAlimento.innerHTML = funcionario.alimento;

    linha.appendChild(tdNome);
    linha.appendChild(tdAlimento);
    linha.appendChild(tdEditar)

    return linha;

}

function listar(){
    let tabela = document.getElementById("tabela")
    tabela.innerText = "";
    let funcionarios;
    event.preventDefault();
    axios.get(url)
    .then(response =>{
        funcionarios = response.data
        console.log(funcionarios)
      //  ListarFuncionarios(funcionarios)
      funcionarios.forEach(element =>{
          let linha = criaLinha(element);
          tabela.appendChild(linha);
      })
        
    })
    .catch(error => console.log(error))
}

function focar(){
    event.preventDefault();
    let tabela = document.getElementById("tabela");
    tabela.focus();

}

/*
const novoFunc = {
    nome: "Leticia",
    cpf: "11111111",
    alimento: "Pera"
}

function getFunc() {
    axios.get(url)
    .then(response =>{
        const data = response.data
   // cadastro.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getFunc()
*/

