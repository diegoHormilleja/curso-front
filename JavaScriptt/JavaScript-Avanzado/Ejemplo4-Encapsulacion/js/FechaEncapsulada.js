// Una clase encapsulada es aquella que todas sus propiedades son privadas 
// y se accede a ellas a traves de los metodos get y set publicos
class FechaEncapsulada{

    #dia;
    #mes;
    #anyo;     

    constructor(dia, mes, anyo){
        this.setDia(dia);
        this.setMes(mes);
        this.setAnyo(anyo);
    }

    getDia(){
        return this.#dia;
    }

    setDia(dia){
        if (dia < 1 || dia >= 31){
            alert("Dia no es valido");
        } else {
            this.#dia = dia;
        }       
    }

    getMes(){
        return this.#mes;
    }

    setMes(mes){
        if (mes < 1 || mes > 12){
            alert("Mes no es valido");
        } else {
            this.#mes = mes;
        }    
    }

    getAnyo(){
        return this.#anyo;
    }

    setAnyo(anyo){
        if (anyo > 2020 || anyo < 1900){
            alert("Año no es valido");
        } else {
            this.#anyo = anyo;
        }   
    }

    mostrarFecha(){
        return this.#dia + "/" + this.#mes + "/" + this.#anyo;
    }
}