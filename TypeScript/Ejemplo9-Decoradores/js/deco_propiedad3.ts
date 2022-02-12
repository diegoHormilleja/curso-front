function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    });
}

class Empleado {
    @ReadOnly // no
    codigo: number = 1;

    nombre: string;
}

const p = new Empleado();
p.nombre = 'Portatil 14 pulgadas';
p.codigo = 2;
console.log(`Código: ${p.codigo}, Nombre: ${p.nombre}`); // 'undefined'