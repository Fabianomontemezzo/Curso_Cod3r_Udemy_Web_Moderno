const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readfiled(caminho, function(__, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

/*const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => consteudo.split('\n'))
    .then(linhas => linhas.join(','))
*/