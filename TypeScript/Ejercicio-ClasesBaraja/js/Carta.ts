class Carta{
    private numero: Numeracion;
    private palo: Palos;

    constructor(numero: Numeracion, palo: Palos){
        this.numero = numero;
        this.palo = palo;
    }

    toString(): string{
        return `Palo: ${Palos[this.palo]} - Numero: ${Numeracion[this.numero]}` ;
    }
}