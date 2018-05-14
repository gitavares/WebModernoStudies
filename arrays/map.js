// map  ---- o map gera um novo array
const nums = [1,2,3,4,5]

//o map é um For com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10   //a arrow function tem o return implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) //o resultado transformado 3 vezes - foram chamados 3 maps. a ordem não importa


const carrinho = [ 
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

//retorna um array apenas com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)



// implementando o map  --- novamente, o map gera um novo array
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const resultado3 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado3)