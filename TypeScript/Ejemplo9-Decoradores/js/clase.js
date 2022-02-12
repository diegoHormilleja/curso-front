var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador sin parametros
function Service(target) {
    console.log("Clase declarada como servicio");
}
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase = __decorate([
        Service
    ], MiClase);
    return MiClase;
}());
(function () {
});
new MiClase();
// Decorador con parametros
function ServiceParam(nombre) {
    return function (target) {
        console.log("Nombre del servicio" + nombre);
    };
}
var OtraClase = /** @class */ (function () {
    function OtraClase() {
    }
    OtraClase = __decorate([
        ServiceParam("miServicio")
    ], OtraClase);
    return OtraClase;
}());
new OtraClase();
