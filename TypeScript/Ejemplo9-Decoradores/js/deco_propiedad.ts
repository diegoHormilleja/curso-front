// Crear el decorador que cambia el valor de una propiedad
// target -> Propiedad donde aplicamos el decorador
// key -> nombre de la propiedad donde aplicamos el decorador
function decoradorPropiedad(target: Object, key:string){

    // Propiedad
    var _val = this[key];

    // Setter de la propiedad
    var setter = function(newVal){
        console.log(`Valor anterior: ${_val} y nuevo valor ${newVal}`);
        console.log("target: " + target);
        console.log("key: " + key);
        _val = newVal;

    };

    if (delete this[key]){
        Object.defineProperty(target, key, {
            set: setter
        });
    }
}

// Crear una clase con una propiedad y aplicar el decorador
class Empleado{

    @decoradorPropiedad
    nombre: String = 'Juan';

    constructor(nombre: string){
        this.nombre = nombre;
    }
}

// Crear un objeto de tipo Empleado
let empleado = new Empleado("Pedro");
empleado.set("Otro nombre");