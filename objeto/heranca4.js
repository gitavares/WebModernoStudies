function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu nome é ${this.nome}`)
}

obj1.falar() //bom dia! meu nome e Anonimo

obj2.nome = 'rafael'
obj2.falar() //bom dia! meu nome e rafael

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) //true