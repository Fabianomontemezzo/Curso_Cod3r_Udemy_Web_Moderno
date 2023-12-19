const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imrpimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imrpimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))


