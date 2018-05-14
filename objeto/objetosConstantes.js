// pessoa -> endereco de memoria 123 -> {...} 
const pessoa = { nome: 'joao' }
pessoa.nome = 'pedro' //pode mudar o atributo, mas não o objeto
console.log(pessoa)

// pessoa -> 456 -> {...}
pessoa = { nome: 'ana' } //vai dar erro, pois está mudando o endreeço de memoria, e isso não pode para constante

Object.freeze(pessoa) //congelando o objeto pessoa
pessoa.nome = 'maria' //nao vai mudar para maria
pessoa.end = 'rua sddd' //não vai adicionar atributos
delete pessoa.nome //não vai excluir
console.log(pessoa.nome) //vai continuar pedro, e não vai mudar para maria

