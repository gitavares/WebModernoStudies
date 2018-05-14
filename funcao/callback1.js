const fabricantes = ["MMM", "dfsdfs", "sdsf"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// exemplo 2
const notas = [7, 9, 10, 4.5, 3.6, 7.1, 10]

//sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


//com callback
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)


//com callback + arrow function
const notasBaixas3 = notas.filter(notas => nota < 7)
console.log(notasBaixas3)

//com callback + arrow function
const notasMenorQue7 = notas => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
