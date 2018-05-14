const aprovados = ['ana', 'bia', 'pedro', 'mia']

aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array) // só para testes --- imprime o array
    console.log(x) //só para testes --- undefined 
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


// criando o proprio foreach

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // primeiro parametro: índice. segundo: valor, terceiro: aquele elemento, que no caso, é o array.
    }
}

aprovados.forEach2(function(nome, indice){ //aqui só usou os dois primeiros parametros. se tivesse colocado um terceiro parametro, traria o array completo. a partir do quarto parametro, seria undefined
    console.log(`${indice + 1}) ${nome}`)
})