const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor
        }
    }    
}

console.log(sequencia.valor, sequencia.valor)