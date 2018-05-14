require('./global')  // não precisa colocar em uma variavel. será apenas carregado

console.log(MinhaApp.saudacao()) //console.log(global.MinhaApp.saudacao())
 
MinhaApp.nome = 'sdasds'
console.log(MinhaApp.nome) //modifica o nome sem o freeze