class Direccion{
    #calle;
    #numero;
    #poblacion;

    constructor(calle, numero, poblacion){
        this.#calle = calle;
        this.#numero = numero;
        this.#poblacion = poblacion;
    }

    mostrar(){
        return `Calle: ${this.#calle}`;
    }
}