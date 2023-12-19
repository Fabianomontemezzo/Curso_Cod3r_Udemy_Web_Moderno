const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/*Object.defineProperty(pessoa, 'dataNascimento', {
    enumetable: true,
    writable: false
    value: '01/01/2019'
})*/ 

pessoa.dataNacimento = '01/01/2017'
console.log(pessoa.dataNacimento)

