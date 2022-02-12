

class Edificio {

    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;

        // array que convertiremos en bidimensional
        // primera dimesión será plantas(+1)
        // segunda dimesión será puertas(+1) 
        this.plantasEdificio = [new Array];

        this.mostrarInformacion();
    }

    // Metodos de accesores o getter y setter
    get imprimeCalle() {
        return this.calle;
    }

    get imprimeNumero() {
        return this.numero;
    }

    get imprimeCodigoPostal() {
        return this.codigoPostal;
    }

    set modificarCalle(newCalle) {
        this.calle = newCalle;
    }

    set modificarNumero(newNumero) {
        this.numero = newNumero;
    }

    set modificarCodigoPostal(newCodigoPostal) {
        this.codigoPostal = newCodigoPostal;
    }

    // Metodos
    agregarPlantasYPuertas(numPlantas, puertas) {

        let alturas = this.plantasEdificio.length;

            // el for comienza en las alturas del eficio
            // rellena hasta alturas del edicio + numPlantas que le pasamos
            for (var i = alturas; i < (alturas + numPlantas); i++) {
                this.plantasEdificio[i] = [];
                for (var j = 0; j < puertas; j++) {
                    this.plantasEdificio[i][j] = undefined;
                }
            }
    }

    agregarPropietario(nombre, planta, puerta) {

        // las posiciones del array empiezan en 0 asi que restamos 1 a las reales que le pasamos
        this.plantasEdificio[--planta].fill(nombre, --puerta, ++puerta);

        // sumamos 1 para mostrar las reales
        document.write(`${nombre} es ahora el propietario de la puerta ${++puerta} de la planta ${++planta} <br>`);

    }

    imprimePlantas() {
        console.dir(this.plantasEdificio);
        this.plantasEdificio.forEach((arreglo, planta) => {
            arreglo.forEach((owner, piso) => {
                //para que no muestre undefined sino ""
                if (owner === undefined) owner = "";

                // sumamos 1 porque las posiciones del array empiezan en 0
                document.write(`<li> Propietario del piso ${piso+1} de la planta ${planta+1}: ${owner} </li>`)
            })
        })
    }

    mostrarInformacion() {
        document.write(`Nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal} <br/>`);
    }

}

let espacio = () => document.write("<br>");


const edificioA = new Edificio("Garcia Prieto", 58, 15706);
const edificioB = new Edificio("Camino Caneiro", 29, 32004);
const edificioC = new Edificio("San Clemente", "s/n", 15705);
document.write("El codigo postal del edificio A es: " + edificioA.imprimeCodigoPostal + ".<br>");
document.write("La calle del edificio C es: " + edificioC.imprimeCalle + ".<br>");
document.write("El edificio B está situado en la calle " + edificioB.imprimeCalle + " número " + edificioB.imprimeNumero + ".<br>");

espacio();

edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

espacio();

edificioA.imprimePlantas();

espacio();

edificioA.agregarPlantasYPuertas(1, 3);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
espacio();
edificioA.imprimePlantas();


console.log(edificioA);