const retrasarMensaje = function(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

retrasarMensaje("Hola después de 2 segundos", 2000);
