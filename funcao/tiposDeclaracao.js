console.log(soma (3, 4))

// function declaration - pode ser chamada antes da declaração dos valores
function soma(x, y) {
    return x + y
}

//function expression - não pode ser chamada antes.
const sub = function (x, y) {
    return x - y
}

// named function expression - não pode ser chamada antes.
const mult = function mult(x, y) {
    return x * y
}