function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) //não mostra o resultado


function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() //falso
seForVerdadeEuFalo(null) //falso
seForVerdadeEuFalo(undefined) //falso
seForVerdadeEuFalo(NaN) //falso
seForVerdadeEuFalo('') //falso
seForVerdadeEuFalo(0)//falso
seForVerdadeEuFalo(-1) //verdade
seForVerdadeEuFalo(' ') //verdade
seForVerdadeEuFalo('?') //verdade
seForVerdadeEuFalo([]) //verdade
seForVerdadeEuFalo([1,2]) //verdade
seForVerdadeEuFalo({}) //verdade


function teste1(num) {
    if(num > 7)
        console.log(num)
        
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)


Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && fim <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperacao')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
