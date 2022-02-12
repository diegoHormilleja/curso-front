class Empleado{

    // propiedades de instancia (cada objeto mantiene su propia copia de estas propiedades)
    #nombre;
    #apellido;
    #sueldo;

    // Propiedades de clase (solo existe una copia y reside en la clase)
    static #contador=0;

    constructor(nombre, apellido, sueldo){
        this.setNombre(nombre);
        this.setApellido(apellido);
        this.setSueldo(sueldo);

        // Incrementar el contador
        // cuando el recurso es estatico solo reside en la clase, asi que lo tengo que llamar poniendo delante el nombre de la clase
        Empleado.#contador++;

    }

    // cuando el metodo es estatico solo reside en la clase, asi que lo tengo que llamar poniendo delante el nombre de la clase
    static getContador(){
        return Empleado.#contador;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getApellido(){
        return this.#apellido;
    }

    setApellido(apellido){
        this.#apellido = apellido;
    }

    getSueldo(){
        return this.#sueldo;
    }

    setSueldo(sueldo){
        this.#sueldo = sueldo;
    }

    mostrarInfo(){
        return "Nombre: " + this.#nombre + " Apellido: " + this.#apellido + " Sueldo: " + this.#sueldo ;
    }


}