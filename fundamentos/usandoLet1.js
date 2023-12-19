var numero = 1
{
    let numero = 2 
    console.log('dentro =', numero)
}

console.log('fora =', numero)

// isso porque let e var não aplicam a mesma ordenação
// let - escopo global, de funcao e de bloco.
// var - escopo global, de funcao.