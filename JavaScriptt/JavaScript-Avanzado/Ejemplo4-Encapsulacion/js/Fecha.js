class Fecha{

    constructor(dia, mes, anyo){
        this.dia = dia;
        this.mes = mes;
        this.anyo = anyo;
    }

    mostrarFecha(){
        return this.dia + "/" + this.mes + "/" + this.anyo;
    }
}