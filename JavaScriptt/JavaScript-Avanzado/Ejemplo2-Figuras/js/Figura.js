class Figura {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }

    posicion() {
        // [x,y]
        return "[" + this.x + ", " + this.y + "]";
    }

    mostrarDatos() {
        return
    }
}

class Circulo extends Figura {

}

class Rectangulo extends Figura {

    constructor(x, y) {
        super(x, y);
    }

    area() {
        return this.x * this.y;
    }

    mostrarDatos() {
        return super.mostrarDatos() + " base: " + this.base + " altura: " + this.altura;
    }

}