const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Tavares',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


// se quiser fazer uma quebra (ou continue) para um laço mais externo, é possível rotular o laço mais externo e chmá-lo junto com o break/continue
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')
// essa estrutura acima não é utilizado na prática. Assemelha-se ao GoTo.