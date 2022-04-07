
export function cadastrar(url, funcionario){
    event.preventDefault();
// console.log("funcionario = ", funcionario)
axios.post(url, funcionario)
     .then(response =>  
         console.log(JSON.stringify(response.data)))
     .catch(error => alert( error.response.data.message)) 
}