let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!
//colocando uma variavel diretamente no objeto global do node.

abc = 3 //não faça isso!!
console.log(global.abc)


//.this é o mesmo que module.exports

//Enteder os RunTimes
//Não colocar var em escopo global