const produtos = [
    { nome: 'Notebook', preco: 2455, fragil: true },
    { nome: 'ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p){
//     return p.preco > 2400
// }))

const precoAcima500 = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil // não precisa dizer "== true"

console.log(produtos.filter(precoAcima500).filter(ehFragil))


// implementando o proprio filter
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

console.log(produtos.filter2(precoAcima500).filter2(ehFragil))