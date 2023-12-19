console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

//this dentro de uma função esta chamando Global
//se chamar o this fora de uma função, esta acessando o Module.exports