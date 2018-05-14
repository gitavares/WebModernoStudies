// funcao construtura - similar à classe quando se trata de criar um novo objeto "new..." "this..."
function Pessoa(nome) {
    
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('giselle')
p1.falar()