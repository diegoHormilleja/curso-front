// Descargar el modulo http de Node
var http = require("http");
var url = require('url');
var operaciones = require('./operaciones');

// Crear un servidor que escuche en el puerto 3000
http.createServer(function(request, response){

    var pathname = url.parse(request.url, true).pathname;
    console.log(url.parse(request.url, true).query);
    console.log("soy pathname: " + url.parse(request.url, true).pathname);


    // Recuperar los parametros de la url
    var num1 = url.parse(request.url, true).query.numero1;
    var num2 = url.parse(request.url, true).query.numero2;


    //Devolver una respuesta
    // Escribir la cabecera de la respuesta
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    // Escribir el cuerpo de la respuesta

    switch(pathname){
        case '/suma':
            // response.write("Suma: " + operaciones.suma(num1, num2) + "<br/>");
            // response.write({"Resultado":operaciones.suma(num1, num2) + "<br/>"});
            response.write(JSON.stringify({Resultado:operaciones.suma(num1, num2)}));
            console.log(JSON.stringify({Resultado:operaciones.suma(num1, num2)}));

            break;

        case '/resta':
            // response.write("Resta: " + operaciones.resta(num1, num2) + "<br/>");

            response.write(JSON.stringify({Resultado:operaciones.resta(num1, num2)}));
            console.log(JSON.stringify({Resultado:operaciones.resta(num1, num2)}));
            break;

        case '/multiplicacion':
            // response.write("Multiplicacion: " + operaciones.multiplicacion(num1, num2) + "<br/>");

            response.write(JSON.stringify({Resultado:operaciones.multiplicacion(num1, num2)}));
            console.log(JSON.stringify({Resultado:operaciones.multiplicacion(num1, num2)}));

        case '/division':
            // response.write("Division: " + operaciones.division(num1, num2) + "<br/>");

            response.write(JSON.stringify({Resultado:operaciones.division(num1, num2)}));
            console.log(JSON.stringify({Resultado:operaciones.division(num1, num2)}));

    }


    // Envio de la respuesta
    response.end();

}).listen(3000);