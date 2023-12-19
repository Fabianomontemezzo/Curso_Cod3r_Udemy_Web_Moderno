const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

// ternario é composto por tres partes:
//primeira parte é uma expressão que retorna vdd ou false (nota >= 7)
//segunda parte se a expressão é verdadeira : 'Aprovado'
//terceira parte se a expressão é falsa 'Falsa'