interface Figura{
    (radio: number);
    (base: number, altura: number);
    (lado: number);
}

let circulo: Figura = (radio) => {
    return Math.PI * Math.pow(radio, 2);
}

let cuadrado: Figura = (lado) => {
    return lado * lado;
}