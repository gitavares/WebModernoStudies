// usada quando quer algum tipo de processamento assíncrono - ser resolvida ou rejeitada
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeOut(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))