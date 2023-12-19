const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo eletemento a lista
console.log(pilotos)

pilotos.push('Verstepen') //adiciona elementos.
console.log(pilotos)

pilotos.shift() //remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona ao primeiro da lista
console.log(pilotos)

// splice pode adicionar ou remover elementos.

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)