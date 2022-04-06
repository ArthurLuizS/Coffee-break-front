const url = "http://localhost:8080/funcionarios"
const url2 = "http://localhost:8080/funcionarios/cadastrar"
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

function cadastrarFunc(){
    axios.post(url2, novoFunc)
        .then(response => 
            alert(JSON.stringify(response.data)))
        .catch(error => console.log(error))
}
cadastrarFunc()