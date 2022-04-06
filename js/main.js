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

    cadastrar(url, funcionario);

}

function listar(){
    let lista = document.getElementsByClassName("#lista")
    event.preventDefault();
    axios.get(url)
    .then(response =>{
        console.log(response)
        const data = response.data
   lista.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
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
function cadastrar(url, funcionario){
 //   event.preventDefault();
   // console.log("funcionario = ", funcionario)
   axios.post(url, funcionario)
        .then(response =>  
            console.log(JSON.stringify(response.data)))
        .catch(error => alert( error.response.data.message)) 
}
