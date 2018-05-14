//colecao dinamica de ares chave/valor

const produto = new Object
produto.nome = 'cadeira'
procuto['marca do produto'] = 'generica'
produto.preco = 22

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 10000,
    proprietario: {
        nome: 'giselle',
        idade: 33,
        endereco: {
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 41
    }],
    caclularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gadssdsdf'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.caclularValorSeguro
console.log(carro)
console.log(carro.condutores) //undefined
console.log(carro.condutores.length) //neste caso, vai dar erro, porque carro.condutores foi excluido


// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


//json
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)