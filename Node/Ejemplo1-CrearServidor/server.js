// Descargar el modulo http de Node
var http = require("http");

// Crear un servidor que escuche en el puerto 3000
http.createServer(function(request, response){

    // Mostrar la peticion recibida
    console.log("Peticion recibida");

    //Devolver una respuesta
    // Escribir la cabecera de la respuesta
    response.writeHead(200, {"Content-Type": "text/html"});

    // Escribir el cuerpo de la respuesta
    response.write("Bienvenidos al curso de NodeJS");

    // Envio de la respuesta
    response.end();

}).listen(3000);