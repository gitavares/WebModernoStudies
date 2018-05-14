for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log('i=', i) //error -- i is not defined



// exemplo 2
const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //vai ser 2
funcs[8]() //vai ser 8 - isso porque LET tem escopo de bloco