console.log('a = ', a)  //a = undefined -- faz o hoisting (içamento)
var a = 2
console.log('a = ', a)  //a = 2


console.log('b = ', b) //erro -- não faz o içamento
let b = 2
console.log('b = ', b) //b = 2