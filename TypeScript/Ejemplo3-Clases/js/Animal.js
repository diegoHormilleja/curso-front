var Animal = /** @class */ (function () {
    // Constructor
    function Animal(numPatas, sonido, alimentacion) {
        this.setNumPatas(numPatas);
        this.sonido = sonido;
        this.alimentacion = alimentacion;
    }
    // Metodos
    Animal.prototype.hablar = function () {
        return "El animal dice " + this.sonido;
    };
    Animal.prototype.mostrar = function () {
        return "Numero de patas: " + this.numPatas + ", Sonido " + this.sonido + ", Alimentacion: " + this.alimentacion;
    };
    // Getter y Setter
    Animal.prototype.getNumPatas = function () {
        return this.numPatas;
    };
    Animal.prototype.setNumPatas = function (numPatas) {
        this.numPatas = numPatas;
    };
    Animal.prototype.getSonido = function () {
        return this.sonido;
    };
    Animal.prototype.setSonido = function (sonido) {
        this.sonido = sonido;
    };
    Animal.prototype.getAlimentacion = function () {
        return this.alimentacion;
    };
    Animal.prototype.setAlimentacion = function (alimentacion) {
        this.alimentacion = alimentacion;
    };
    return Animal;
}());
