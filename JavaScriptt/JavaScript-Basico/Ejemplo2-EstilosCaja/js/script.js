
var NUM = 5;
num = 7;
alert(NUM);

// Variables
var estiloBorde = false;
var estiloColor = false;
var estiloSombra = false;

function borde() {
    if (estiloBorde == false){
        document.getElementById("cuadrado").style.border = "5px solid blue";
        // document.getElementById("cuadrado").className = "cuadrado_borde";
        estiloBorde = true;
    } else {
        document.getElementById("cuadrado").style.border = "none";
        estiloBorde = false;
    }
}

function color() {
    if (!estiloColor) {
        document.getElementById("cuadrado").style.backgroundColor = 'pink';

    } else {
        document.getElementById("cuadrado").style.backgroundColor = 'darksalmon';

    }
    estiloColor = !estiloColor;
}

function sombra(){
    if (!estiloSombra){
        document.getElementById("cuadrado").style.boxShadow = "5px 5px 10px red"
    } else {
        document.getElementById("cuadrado").style.boxShadow = "none";
    }

    estiloSombra = !estiloSombra;

}