class Calculadora{

    // Implementamos la funcion de la interface Operacion
    // dentro de una variable sumar
    sumar: Operacion = (n1,n2) => {
        return n1 + n2;
    }

    restar: Operacion = (n1,n2) => {
        return n1 - n2;
    }

    multiplicar: Operacion = (n1,n2) => {
        return n1 * n2;
    }

    dividir: Operacion = (n1,n2) => {
        return n1 / n2;
    }
}