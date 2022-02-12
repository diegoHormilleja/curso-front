var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Crear el decorador que cambia el valor de una propiedad
// target -> Propiedad donde aplicamos el decorador
// key -> nombre de la propiedad donde aplicamos el decorador
function decoradorPropiedad(target, key) {
    // Propiedad
    var _val = this[key];
    // Setter de la propiedad
    var setter = function (newVal) {
        console.log("Valor anterior: " + _val + " y nuevo valor " + newVal);
        console.log("target: " + target);
        console.log("key: " + key);
        _val = newVal;
    };
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            set: setter
        });
    }
}
// Crear una clase con una propiedad y aplicar el decorador
var Empleado = /** @class */ (function () {
    function Empleado(nombre) {
        this.nombre = 'Juan';
        this.nombre = nombre;
    }
    __decorate([
        decoradorPropiedad
    ], Empleado.prototype, "nombre");
    return Empleado;
}());
// Crear un objeto de tipo Empleado
var empleado = new Empleado("Pedro");
empleado.set("Otro nombre");
