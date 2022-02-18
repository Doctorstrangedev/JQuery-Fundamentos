$(document).ready(function() {
    //para acceder directamente al padre de las cajas
    //  $('#padre');
    //en caso de que ele padre no tenga el id, se puede acceder mediate su hijo
    //  $('#tercero').parent();

    //encadenación (accediendo a un hijo para darle estilos css al padre)
    //  $('#tercero').parent().css({ background: 'tomato' })

    //devuelve todos sus padres
    //  $('#tercero').parents();
    //y como es un arreglo se puede acceder con su indice
    //  $('#tercero').parents()[0];
    //  $('#tercero').parents()[1];
    //  $('#tercero').parents()[2];
    //  $('#tercero').parents()[3];

    //Children
    //  $('#padre').children().fadeOut(3000);
    //  $('#padre').children('#tercero').fadeOut(3000);

    //find nos permite encontrar dentro del contenedor los elementos que tengan la clase caja y al final se aplica animacion de slideUp
    //  $('#contenedor').find('div.caja').slideUp(2000)

    //siblings nos permite seleccionar a los elementos hermanos
    //  $('#tercero').siblings().fadeOut(1500)
    //con la animacion de fadeOut() los elementos hermanos se ocultaran

    //al elemento anterior
    /* 
         $('#tercero').prev().css({
         background: '#000'
     })
     //al elemento siguiente
         $('#tercero').next().css({
         background: 'tomato'
     });
     */

    //a todos los elementos anteriores
    /*$('#tercero').prevAll().css({
        background: '#000'
    });
    //a todos los elementos siguientes
    $('#tercero').nextAll().css({
        background: 'tomato'
    });
    */


});