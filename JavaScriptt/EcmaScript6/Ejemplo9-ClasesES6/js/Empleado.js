// Empleado is-a Persona
class Empleado extends Persona{

    #id;
    #sueldo;
    #proyecto;
    #direccion; // Empleado tiene una direccion, relacion has-a, COMPOSICION

    static contador = 0;

    constructor(nombre, telefono, email, edad, direccion, sueldo=18000, proyecto='staff'){
        super(nombre, telefono, email, edad);
        this.#sueldo = sueldo;
        this.#proyecto = proyecto;
        this.#direccion = direccion;
        this.#id = ++Empleado.contador;
    }

    mostrarInformacion(){
        return `El empleado de id ${this.#id}, ${super.mostrarInformacion()}, con sueldo ${this.#sueldo}, trabaja en el proyecto: ${this.#proyecto}, Direccion: ${this.#direccion.mostrar()} `;
    }

    asignarProyecto(nuevo){
        this.#proyecto = nuevo;
    }

    modificarSueldo(aux){
        this.#sueldo = aux;
    }

    static getContador(){
        return this.contador;
    }
}