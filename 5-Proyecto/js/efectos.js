$(document).ready(function () {
    /*EFECTO DE LOS MENUS */
    /* each es una iteracion (funciona como un for) */
    $('.menu a').each(function (index, elemento) {

        //this significa que hacemos referencia al elemento actual
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1200 + (index * 500))
    });
});