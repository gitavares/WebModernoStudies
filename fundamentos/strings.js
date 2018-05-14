const escola = "Cod3r"

console.log(escola.charAt(4)) //imprime r
console.log(escola.charAt(5)) //imprime vazio
console.log(escola.chardCodeAt(3)) //traz o valor na tabela Unicode
console.log(escola.indexOf('3')) //traz 3 que é o 3 da palavra Cod3r, qie está no índice 3

console.log(escola.substring(1)) //percorre a string a partir do índice 1
console.log(escola.substring(0,3)) //percorre a string a partir do índice 0, porém exclui a partir do índice 3

console.log("Escola".concat(escola).concat("!")) //vai imprimir "Escola Cod3r!"
console.log(escola.replace(3, 'e')) // Substitui o 3 pela letra e. Se usar expressões regulares, exemplo o /\d/ -->substituir todos os dígitos pela letra e (regex)
console.log('Ana,Maria,Pedro'.split(',')) //gera um array com 3 elementos, utilizando a "," como separador





