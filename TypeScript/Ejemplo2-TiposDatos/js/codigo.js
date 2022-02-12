var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Tipo string
var saludo = 'Hola';
var texto = "Adios";
document.writeln(saludo + " " + texto);
// number
var numero = 9;
var decimal = 6.4;
var hexadecimal = 0xf00d; //0x_______
var binary = 13; // 0b__________
var octal = 31515; // 0o_________
document.writeln("Numero: " + numero + " Decimal:" + decimal + " Hexadecimal: " + hexadecimal + " Binary: " + binary + " Octal: " + octal);
// boolean
var soltero = true;
document.writeln("Estas soltero? " + soltero + " <br/>");
// arrays
var nombres = ['Juan', 'Ana', 'Luis', 'Paco'];
var nombres2 = ['Juan', 'Ana', 'Luis', 'Paco'];
var numeros = [1, 2, 3, 4, 5];
document.writeln.apply(document, nombres);
document.writeln("<br/>");
document.writeln(nombres2.toString() + "<br/>");
document.writeln("" + __spreadArrays(numeros));
// enums
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["SOLTERO"] = 0] = "SOLTERO";
    EstadoCivil[EstadoCivil["CASADO"] = 1] = "CASADO";
    EstadoCivil[EstadoCivil["VIUDO"] = 2] = "VIUDO";
    EstadoCivil[EstadoCivil["DIVORCIADO"] = 3] = "DIVORCIADO";
    EstadoCivil[EstadoCivil["PAREJAHECHO"] = 4] = "PAREJAHECHO";
})(EstadoCivil || (EstadoCivil = {}));
;
var PuntosCardinales;
(function (PuntosCardinales) {
    PuntosCardinales[PuntosCardinales["NORTE"] = 0] = "NORTE";
    PuntosCardinales[PuntosCardinales["SUR"] = 1] = "SUR";
    PuntosCardinales[PuntosCardinales["ESTE"] = 2] = "ESTE";
    PuntosCardinales[PuntosCardinales["OESTE"] = 3] = "OESTE";
})(PuntosCardinales || (PuntosCardinales = {}));
;
var punto = PuntosCardinales.NORTE;
document.writeln("Punto Cardinal: " + punto);
// any
var valor = 'Hola';
valor = 3;
valor = true;
valor = [1, 2, 3, 4, 5];
var varios = [1, true, 'hola'];
// void 
function mostrar(texto) {
    document.writeln(texto);
}
mostrar('Hola');
