// cadeia de protótipos (protype chain)
Object.prototype.attr0 = '0' // nao fazer isso
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1, filho.attr1, filho.attr2, filho.attr3) // 0 A B C


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modeli: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //estabeleceu uma relacao entre ferrari e carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo) // { modelo: 'F40', status: [Function: status] }

volvo.aceleraMais(100)
console.log(volvo.status()) //V40: 100km/h de 200km/h

ferrari.aceleraMais(300)
console.log(ferrari.status()) //F40: 300km/h de 324km/h


