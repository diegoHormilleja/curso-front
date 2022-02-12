
function math(){
    document.getElementById("resultado").innerHTML =
    "Logaritmo" + Math.log(1000) + "<br/>" + 
    "Exponencial" + Math.exp(4) + "<br/>"; 
}

function math2(){

    var	logaritmo = Math.log(1000);
    document.getElementById("resultado").innerHTML += ("Logaritmo: Math.log(1000) >>> " + logaritmo + "<br/>");

    var	exponencial = Math.exp(4);																		
    document.getElementById("resultado").innerHTML += ("Exponencial: Math.exp(4) >>> " + exponencial + "<br/>");

    var raizCuadrada = Math.sqrt(9);
    document.getElementById("resultado").innerHTML += ("Raiz cuadrada: Math.sqrt(9) >>> " + exponencial + "<br/>");

    var potencias = Math.pow(3,2);														
    document.getElementById("resultado").innerHTML += ("Potencias: Math.pow(3,2) >>> " + potencias + "<br/>");

    var redondeoAbsoluto = Math.abs(-1.2536);								
    document.getElementById("resultado").innerHTML += ("Red.Absoluto: Math.abs(-1.2536) >>> " + redondeoAbsoluto + "<br/>");

}
