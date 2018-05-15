const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
                .pipe(babel({ // babel é ferramenta para converter um codigo mais novo de JS para um mais antigo, para garantir mais compatibilidade
                    minified: true,
                    comments: false, //vai retirar os comentários
                    presets: ["env"] //automaticamente ele vai procurar e definir quais presets para rodar a aplicação
                }))
                // .pipe(uglify()) // minimifica -- teria que ter o babel, porque o uglify não sabe de algumas caracsteristicas novas do JS
                .on('error', function (err) { console.log(err) })
                .pipe(concat('codigo.min.js'))
                .pipe(gulp.dest('build'))
})