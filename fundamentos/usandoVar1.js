//exemplo 1
{{{{ var sera = 'Será???' }}}} // a var é visível mesmo fora do bloco
console.log(sera)


//exemplo 2
function teste(){
    var local = 123
}

teste()
console.log(local) //neste caso, a var local não estará visível fora do bloco, pois está dentro de um bloco de função.


