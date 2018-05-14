for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i=', i) //imprime 10


// exemplo 2
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //vai ser 10
funcs[8]() //vai ser 10 - isso porque VAR não tem escopo de bloco