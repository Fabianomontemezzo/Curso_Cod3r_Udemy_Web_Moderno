const gulp = require('gulp')
const series = gulp.series

const antes1 = bc => {
    console.log(antes1)
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de Copiar.')
    return cb()
}

module.exports.default = series(copiar)