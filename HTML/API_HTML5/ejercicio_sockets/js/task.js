var palabra;

function contador() {
    // Proceso la informacion recibida de la pagina index
    onmessage = function (e) {
        palabra = e.data;
    };

    // Esperar a que pase medio segundo y asi le da tiempo a recibir el mensaje
    setTimeout(() => {
        palabra = "hola";
        postMessage("HILO 2 DICE " + palabra);
        contador()
    }, 500);

}

contador();