// funcao auto invocada
// IIFE - Immedicately invoked function expression

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()
// foge do escopo global. tudo que for feito dentro desse tipo de função, será usado apenas dentro dele

