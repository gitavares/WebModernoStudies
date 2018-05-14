const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//mulher chinesa com o menor salario
    //const paraObjeto = json => JSON.parse(json)  -- não precisa por causa do módulo axios
    const pais = funcionario => funcionario.pais === "China"
    const mulher = funcionario => funcionario.genero === "F"
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    
    //mulher chinesa com o menor salario
    const chinesaMenorSalario = funcionarios
                                .filter(pais)
                                .filter(mulher)
                                .reduce(menorSalario)
    console.log(chinesaMenorSalario)
})