function decoParam(target: Object, key: string, index: number) {
    console.log(target);
    console.log(key);
    var metadata = `log ${key}, parametros: `;
    if (Array.isArray(target[metadata])) {
        target[metadata].push(index);
    } else {
        target[metadata] = [index];
    }
    console.log(target['metodo']);
}


class Ejemplo {

    metodo(@decoParam nombre: string) {
        console.log("Hoola " + nombre);
    }
}

new Ejemplo().metodo("Juan");