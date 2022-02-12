class Animal{

    // Propiedades
    private numPatas: number;
    private sonido: string;
    private alimentacion: TipoAnimal;

    // Constructor
    constructor(numPatas: number, sonido: string, alimentacion: TipoAnimal){
        this.setNumPatas(numPatas);
        this.sonido = sonido;
        this.alimentacion = alimentacion;
    }

    // Metodos
    hablar(){
        return `El animal dice ${this.sonido}`;
    }

    mostrar(): string{
        return `Numero de patas: ${this.numPatas}, Sonido ${this.sonido}, Alimentacion: ${this.alimentacion}`;
    }

    // Getter y Setter
    getNumPatas(){
        return this.numPatas;
    }

    setNumPatas(numPatas: number): void{
        this.numPatas = numPatas;
    }

    getSonido(): string{
        return this.sonido;
    }

    setSonido(sonido: string): void{
        this.sonido = sonido;
    }

    getAlimentacion(): TipoAnimal{
        return this.alimentacion;
    }

    setAlimentacion(alimentacion: TipoAnimal): void {
        this.alimentacion = alimentacion;
    }
}