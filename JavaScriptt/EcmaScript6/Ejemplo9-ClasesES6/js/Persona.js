class Persona{
    #nombre;
    #telefono;
    #email;
    #edad;

    constructor(nombre, telefono, email, edad){
        this.#nombre = nombre;
        this.#telefono = telefono;
        this.#email = email;
        this.#edad = edad;
    }

    mostrarInformacion(){
        return `Nombre: ${this.#nombre}, Telefono: ${this.#telefono}, Email: ${this.email}, Edad: ${this.#edad}`;
    }
}