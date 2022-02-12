// Todas las clases comienzan en Mayuscula

// Una clase encapsulada es aquella que todas sus propiedades son privadas y se accede a ellas a traves de los get y set publicos
class Alumno {

    // Propiedades privadas
    #nombre;
    #apellido;
    #nota;

    // Esto se ejecuta cada vez que creamos un nuevo objeto (new)
    constructor(nombre, apellido, nota) {

        // Los datos que hemos recibido en el constructor los asignamos a las propiedades del objeto
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nota = nota;
    }

    // Metodos de acceso o accesores o getter y setter
    // Clase idempotente, cuando solo puedes leer los campos o propiedades pero no puedes modificarlos
    getNombre() {
        return this.#nombre;
    }

    getNota() {
        return this.#nota;
    }

    getApellido() {
        return this.#apellido;
    }

    setNota(nuevaNota){
        this.#nota = nuevaNota;
    }

    // Metodos
    mostrarInformacion() {
        return "NOMBRE :: " + this.nombre + " | APELLIDO :: " + this.apellido + " | NOTA " + this.nota;
    }

    aprobado(){
        return this.#procesarNota();
    }

    // Es un metodo privado y solo se puede acceder a el desde dentro de la clase
    #procesarNota(){
        if (this.#nota >= 5){
            return "Aprobado";
        } else {
            return "Suspenso";
        }
    }
}