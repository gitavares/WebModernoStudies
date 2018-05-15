const gulp = require('gulp')

gulp.task('default', () => {  // a task default é obrigatória
    // console.log('OK!!!')
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => { //['antes1', 'antes2'] são tasks de pre-requisito para "copiar"
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])  //'pastaA/*.txt' pode ser quantos arquivos quiser, nesse exemplo. para copiar tb subpastas 'pastaA/**/*.txt', como exemplo */
    gulp.src(['pastaA/**/*.txt'])
        // .pipe(transformacao1()) // vai encadeando uma chamada a outra, com ajuda de filtros
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('antes1!!!')
})

gulp.task('antes2', () => {
    console.log('antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('fim1!!!')
})

gulp.task('fim2', () => {
    console.log('fim2!!!')
})