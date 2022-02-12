function suma(a,b){
    return parseInt(a) + parseInt(b);
}

function resta(a,b){
    return parseInt(a) - parseInt(b);
}

function multiplicacion(a,b) {
    return parseInt(a) * parseInt(b);
}

function division(a,b){
    return parseInt(a) / parseInt(b);
}

// Exportar las funciones como modulo para que se puedan utilizar en otro modulo
module.exports = {
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division
};