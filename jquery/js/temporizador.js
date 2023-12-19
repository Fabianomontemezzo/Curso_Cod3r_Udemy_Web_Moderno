(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais  = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadoHora = $('<span class="separador">').html(':')
        const separadoMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadoHora,
            minutoDezena, minutoUnidade, separadoMinuto,
            segundoDezena, segundoUnidade, mensagem)       

        return this
    }
})(JQuery)