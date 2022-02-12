var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ReadOnly(target, key) {
    Object.defineProperty(target, key, {
        writable: false
    });
}
var Empleado = /** @class */ (function () {
    function Empleado() {
        this.codigo = 1;
    }
    __decorate([
        ReadOnly // no
    ], Empleado.prototype, "codigo");
    return Empleado;
}());
var p = new Empleado();
p.nombre = 'Portatil 14 pulgadas';
p.codigo = 2;
console.log("C\u00F3digo: " + p.codigo + ", Nombre: " + p.nombre); // 'undefined'
