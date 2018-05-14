//novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua aaa',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)  // undefinied true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) //Rua aaa 1000 undefined



// destructuring a partir de um array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10 9 undefined 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) // 6



// destructuring usando objeto
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) //gera numeros entre 40 e 50
console.log(rand({min: 955})) //gera números entre 955 e 1000
console.log(rand({})) //gera numeros entre 0 e 1000
console.log(rand()) //error



// destructuring usando funcao e array
function rand2([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //gera numero entre 40 e 50
console.log(rand([992])) //gera numero entre 992 e 1000
console.log(rand([, 10])) //gera numero entre 0 e 10
console.log(rand([])) //gera numero entre 0 e 1000
console.log(rand())  // mesmo erro do caso anterior