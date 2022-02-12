// Decorador sin parametros
function Service(target: Function){
    console.log("Clase declarada como servicio");
}


@Service
class MiClase(){
    
}

new MiClase();


// Decorador con parametros
function ServiceParam(nombre: string){
    return function(target: any){
        console.log("Nombre del servicio:" + nombre);
    }
}

@ServiceParam("miServicio")
class OtraClase{

}

new OtraClase();