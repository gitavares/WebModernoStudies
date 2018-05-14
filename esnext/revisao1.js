// "..." significa rest/spread

//operador rest(juntar)/spread(espalhar)
//usar rest com para,etrp de funcao

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12354.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)


// tagged template
function tagged(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

// outro exemplo de tagged template
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)


// map
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) //false

const chavesVariadas = new Map([
    [function () { }, 'Funcção'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) //false
console.log(chavesVariadas.size) //2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) // Map { [Function] => 'Função, {} => 'Objeto', 123 => 'b' }
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // Map { [Function] => 'Função, {} => 'Objeto', 123 => 'b', 456 => 'b' }



// set - não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // será ignorado - repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //false
console.log(times.has('Vasco')) //true
times.delete('Flamengo')
console.log(times.has('Flamengo')) //false


// For Of - impera em cima de valores
for(let letras of "Giselle") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}


