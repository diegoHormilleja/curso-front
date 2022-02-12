var Carta = /** @class */ (function () {
    function Carta(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
    Carta.prototype.toString = function () {
        return "Palo: " + Palos[this.palo] + " - Numero: " + Numeracion[this.numero];
    };
    return Carta;
}());
