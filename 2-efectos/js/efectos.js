function efecto() {
    console.log('hola soy efecto');
    //  $(selector).efecto.(velocidad, callback)
    //3000 milisegundos corresponde a 3 segundos

    /*
    hide
    este sirve para ocultar la caja
    $('.caja').hide(3000, function() {
        alert('el mago lo ha ocultado...')
    });
    */
    /*
    show
    esto es para volver a mostrar la caja
        $('.caja').show(function() {
            alert('regrese!!!')
        })
        */
    /*el togle cumple las 2 funcionalidades
        $('.caja').toggle(1000, function() {
            alert('soy toggle y cumplo las 2 funciones...')
        });*/
    //fadeIn (es necesario que la caja este oculta para aplicarlo)
    //$('.caja').fadeIn(3000)

    //fadeOut (es necesario que la caja este oculta)
    /*
        $('.caja').hide(3000, function() {
            alert('el mago lo ha ocultado...')
        });*/

    //$('.caja').fadeOut()

    //fadeToggle (realiza los 2 tipos de efectos fade)

    $('.caja').fadeToggle(1000);
}