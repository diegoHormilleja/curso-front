

class Animal {
    static contador = 0;

    constructor(especie, edad, color, raza) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.raza = null;

        Animal.sumar();
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(newRaza) {
        this.raza = newRaza;
    } 

    static sumar() {
        this.contador++;
    }

}


Animal.sumar();  // no hace falta crear ningun objeto para usar el metodo static 
Animal.sumar();  // no utiliza propiedades del objeto (especie, edad, color...)
const animal = new Animal("perro");
console.log("soy contador: " + Animal.contador);

const animal_2 = new Animal("gato");
console.log("soy contador: " + Animal.contador);

animal.setRaza = "doberman";
document.write(animal.getRaza);

console.log(animal);

