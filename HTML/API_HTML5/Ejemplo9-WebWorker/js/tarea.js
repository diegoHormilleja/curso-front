var i = 0;

function contador() {
    // Proceso la informacion recibida de la pagina index
    onmessage = function (e) {
        i = parseInt(e.data);
    };

    // Esperar a que pase medio segundo y asi le da tiempo a recibir el mensaje
    setTimeout(() => {
        i++;
        postMessage(i);
        contador()
    }, 500);

}

contador();