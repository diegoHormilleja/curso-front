// Todas las clases comienzan en Mayuscula

class Alumno {

    // Esto se ejecuta cada vez que creamos un nuevo objeto (new)
    constructor(nombre, apellido, nota) {

        // Los datos que hemos recibido en el constructor los asignamos a las propiedades del objeto
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }

    // Metodos
    mostrarInformacion() {
        return "NOMBRE :: " + this.nombre + " | APELLIDO :: " + this.apellido + " | NOTA " + this.nota;

    }
}