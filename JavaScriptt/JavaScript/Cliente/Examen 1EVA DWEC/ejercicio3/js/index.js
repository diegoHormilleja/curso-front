// i == 0  dividir
// i == 1  multiplicar
const operar = (nombres, i, numPermitidos) => {
    numeros[0] = prompt(`Introduce ${nombres[i][0]}`);
    do {
        numeros[1] = prompt(`Introduce ${nombres[i][1]}`);
    } while (!numPermitidos.includes(numeros[1]));

    // La raíz de 2 a la 1 es 1.4142135623730951
    // La raíz de 2 a la 2 es 2
    // La raíz de 2 a la 3 es 2.8284271247461903
    // La raíz de 2 a la 4 es 4

    // hacemos esto puesto que la raiz de 2 a la 3 es 2.8
    if ( parseInt(numeros[1]) == 8) {
        raiz = 3;
    } else {
        raiz = Math.sqrt(parseInt(numeros[1]));
    }
    if (i == 0) {
        resultado = parseInt(numeros[0]) >> raiz;
    } else {
        resultado = parseInt(numeros[0]) << raiz;
    }

    alert(resultado);
}



let operacion = "";
let i = 0; let raiz = 0;
let numeros = [];
let resultado = 0;

// almacenamos los num permitidos en string porqe prompt nos devuelve un string
let numPermitidos = ["2", "4", "8", "16"];
let variables = ["m", "d", "salir"];

let nombres = [['dividendo', 'divisor'], ['multiplicando', 'multiplicador']];

while (operacion != 'salir') {
    operacion = "";

    while (!variables.includes(operacion)) {
        operacion = prompt("Que quieres hacer multiplicar(m) dividir(d) o salir");
        // operacion.toLowerCase;
    }

    if (operacion == 'salir') break;

    switch (operacion) {
        case ('m'):
            operar(nombres, 1, numPermitidos);
        break;

        case ('d'):
            operar(nombres, 0, numPermitidos);
        break;

    }

}


