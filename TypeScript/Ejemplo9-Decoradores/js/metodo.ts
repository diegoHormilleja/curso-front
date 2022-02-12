// target: la clase a la que pertenece el método al que aplicmamos el decorador

// key: El metodo al que aplicamos el decorador 
// descriptor: todas las propiedades que describen al metodo


function traza(target: Object, key: string, descriptor: any){
    console.log(" Target --------------- ");
    console.log(target.constructor.name);

    console.log(" Key    --------------- ");
    console.log(key);

    console.log(" Descriptor ----------- ");
    console.log(descriptor);
}

class Ejemplo{

    @traza
    miMetodo(texto: string){
        document.write(texto);
    }
}

new Ejemplo().miMetodo("Martes y 13 !!!");