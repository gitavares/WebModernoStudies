//funcao em JS é First-Class Object (Citizens)
//Higher-order function

function fun1(){}

const fun2 = function () { } //funcao anonima dentro de uma constante

const array = [function(a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributop de objeto
const obj = {}
obj.falar = function(){ return 'opa' }
console.log(obj.falar())

//passar uma funcao como param
function run(fun1) {
    fun
    fun()
} 

run(function() { console.log('Executando...') })

// uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)

// params E Retorno Sao Opcionais

function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2)) //4
console.log(area(2)) //NaN
console.log(area()) //NaN
console.log(area(2,3, 17,22,44)) //6
console.log(area(5,5)) //Valor acima do permite: 25m2


function soma(){
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(1)) //1
console.log(soma(1.1, 2.2, 3.3)) //6.6
console.log(soma(1.1, 2.2, "teste")) //3.300000000003teste
console.log(soma('a', 'b', "teste")) //0abteste


// param padrao
//estrategia 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) //3
console.log(soma1(3)) //5
console.log(soma1(1, 2, 3)) //6
console.log(soma1(0,0,0)) //false - vai retornar 3, porque 0 é false


//estrategia 2, 3 e 4 
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments //dentro de arguments existe o índice 1? se não, pegue o valor de b, se não, pegue o valor padrão, que nesse caso é 1
    c = isNaN(c) ? 1 : c //caso c não seja um número, retorne o valor padrão, caso contrário retorne o valor de c
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

//valor padrão do es2015 --- melhor forma de escrever as situações acima
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))


//this and bind 
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() //Bom dia
const falar = pessoa.falar
falar() //undefined - conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o this será resolvido para pessoa - Bom dia


function Pessoa() {
    this.idade = 0

    // const self = this --- para não usar o bind(this), mas é preciso substituir o "this" da funcao

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa  //imprime de 1 a ....


// arrow function

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá'


function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa  //imprime de 1 a ....


