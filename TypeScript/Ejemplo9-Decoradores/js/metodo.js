// target: la clase a la que pertenece el método al que aplicmamos el decorador
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// key: El metodo al que aplicamos el decorador 
// descriptor: todas las propiedades que describen al metodo
function traza(target, key, descriptor) {
    console.log(" Target --------------- ");
    console.log(target.constructor.name);
    console.log(" Key    --------------- ");
    console.log(key);
    console.log(" Descriptor ----------- ");
    console.log(descriptor);
}
var Ejemplo = /** @class */ (function () {
    function Ejemplo() {
    }
    Ejemplo.prototype.miMetodo = function (texto) {
        document.write(texto);
    };
    __decorate([
        traza
    ], Ejemplo.prototype, "miMetodo");
    return Ejemplo;
}());
new Ejemplo().miMetodo("Martes y 13 !!!");
