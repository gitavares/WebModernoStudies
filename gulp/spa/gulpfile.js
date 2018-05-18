const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {  // > gulp --production OU npm run build (de acordo com o package.json)
        sequence('deps', 'app') // isto porque o gulp ainda não executa sequencialmente tudo. as vezes em paralelo. mas a nova versão, vai ter a sequencia]. Além disso, o sequence só funciona sse cada um dos métodos tiver um return
        // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor') // > npm start
        // gulp.start('deps', 'app', 'servidor')
    }
})  

