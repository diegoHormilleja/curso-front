function decoradorPropiedad2(target: Object, propertyKey: string) {
    console.log("target: " + target);
    console.log("key: " + propertyKey);
}

class Ejemplo {
    @decoradorPropiedad2
    nombre: string = "Anabel";

}

