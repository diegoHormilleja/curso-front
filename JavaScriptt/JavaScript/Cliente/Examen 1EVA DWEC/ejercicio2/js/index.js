

class Ordenador {

    constructor(marca, modelo, HD, portatil, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.HD = HD;
        this.portatil = portatil;
        this.precio = precio;
    }

    set setRam(newRAM) {
        this.RAM = newRAM;
    }

    set setPrecio(newPrecio) {
        this.precio = newPrecio;
    }

    get imprimePortatil() {
        return this.portatil;
    }

    get imprimePrecio() {
        return this.precio;
    }

    get imprimeMarca() {
        return this.marca;
    }

    mostrar() {
        document.write(`Marca: <b>${this.marca}</b>, Modelo: <b> ${this.modelo} </b>, disco duro HD de <b> ${this.HD}</b> TB,  <b>${this.RAM}</b> GB de RAM, es portatil: <b> ${this.portatil} </b> y tiene un precio de: <b> ${this.precio} € </b> <br/>`);
    }

}


const espacio = () => document.write("<br>");

let ordenadores = [
    new Ordenador("Asus", "A1", 8, true, 880),
    new Ordenador("Asus", "A2", 8, true, 660),
    new Ordenador("Asus", "A3", 8, true, 440),
    new Ordenador("ACER", "ACX", 4, false, 800),
    new Ordenador("LENOVO", "L1", 4, false, 600),
    new Ordenador("LENOVO", "L2", 4, false, 400),

]

ordenadores[0].setRam = 32;
ordenadores[1].setRam = 32;
ordenadores[2].setRam = 16;
ordenadores[3].setRam = 16;
ordenadores[4].setRam = 8;
ordenadores[5].setRam = 8;

document.write(` <span style="color:red"> d. Mostrar la información de todos los ordenadores almacenados en el array </span> </br>`);

let max = 0;
let laptopMost = "";
for (let i = 0; i < ordenadores.length; i++) {
    ordenadores[i].mostrar();
    if (ordenadores[i].imprimePortatil) {
        if (max == 0) {
            max = ordenadores[i].imprimePrecio;
            laptopMost = ordenadores[i];
        } else {
            if (max < ordenadores[i].imprimePrecio) {
                max = ordenadores[i].imprimePrecio;
                laptopMost = ordenadores[i];
            }
        }
    }
}

espacio();

document.write(` <span style="color:red"> e. Mostrar el precio máximo de los ordenadores portátiles </span> </br>`);

document.write(`<b> El ordenador portatil más caro es: </b> </br> `);
laptopMost.mostrar();

espacio();

document.write(` <span style="color:red"> f) modificar con un descuento de un 10% los ordenadores que son de la marca ASUS </span> </br> `);
// 
let descuento = 0;
for (let i = 0; i < ordenadores.length; i++) {
    if (ordenadores[i].imprimeMarca == "Asus") {
        ordenadores[i].setPrecio = (ordenadores[i].imprimePrecio * 0.9);
    }
}


for (let i = 0; i < ordenadores.length; i++) {
    ordenadores[i].mostrar();
}