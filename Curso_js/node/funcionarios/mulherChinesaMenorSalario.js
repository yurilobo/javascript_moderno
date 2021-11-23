const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios =require('axios')



axios.get(url).then(response =>{
    const funcionarios =response.data
  //  console.log(funcionarios)
    const chineses=funcionarios=>funcionarios.pais=='China'
    const mulheres=funcionarios=>funcionarios.genero=='F'
    const menorSalario=(func,funcAtual)=>{
        return func.salario<funcAtual.salario?func: funcAtual
    }
    const func=funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
    
})
