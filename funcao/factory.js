// função que retorna um objeto
// factory simples

function criarPessoa() {
    return {
        nome: 'giselle',
        sobrenome: 'tavares'
    }
}

console.log(criarPessoa())

// factory com parametros
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('agua', 2)) // {nome: 'agua', preco: 2, desconto: 0.1 }


//// com métodos
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7888, 4)
const f2 = criarFuncionario('maria', 17888, 1)
console.log(f1.getSalario(), f2.getSalario())
