const pessoa = {
    nome: 'receddd',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// ou

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // vai continuar 01/01/2019, porque o writable está falso
console.log(Object.keys(pessoa))

//Object.assign (ECMAscript 2015)
const dest = {a: 1}
const obj1 = { b: 2}
const obj2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //é criado um novo objeto de destino, e tudo que estiver depois do 'dest' será concatenado. O valor de "a" será alterado 

