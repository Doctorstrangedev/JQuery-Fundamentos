$(document).ready(function() {
    //first elige el primer elemento que tenga la clase caja
    /*$('.caja').first().css({
        background: 'green'
    });
    */
    //last elige el ultimo elemento que tenga la clase caja
    /*
     $('.caja').last().css({
         background: 'red'
     });
     */

    //eq se puede acceder a cualquier elemento con los indices
    /*$('.caja').eq(4).css({
        background: 'red'
    })*/
    /*
    filter recorre todos los elementos antes de tomar el elemento seleccionado
    $('.caja').filter('#segundo').css({
        background: '#f9a03f'
    })
    */

    //not selecciona a todos los elementos con la clase caja excepto al que tiene id segundo
    /*
    $('.caja').not('#segundo').css({
        background: 'tomato'
    })
    */

});