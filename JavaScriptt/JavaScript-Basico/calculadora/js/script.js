
function suma(){
    var num1 = parseInt(document.getElementById("numero").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    suma = num1 + num2;
    // alert(suma);
    document.getElementById("resultado").innerHTML = "<br>" + suma + "</br>";
}

function resta(){
    var num1 = document.getElementById("numero").value;
    var num2 = document.getElementById("numero2").value;
    resta =  parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML = "<br>" + resta + "</br>";
}

function multiplicacion(){
    var num1 = document.getElementById("numero").value;
    var num2 = document.getElementById("numero2").value;
    multiplicacion =  parseInt(num1) * parseInt(num2);
    document.getElementById("resultado").innerHTML = "<br>" + multiplicacion + "</br>";
}

function division(){
    var num1 = document.getElementById("numero").value;
    var num2 = document.getElementById("numero2").value;
    division =  parseInt(num1) / parseInt(num2);
    document.getElementById("resultado").innerHTML = "<br>" + division + "</br>";
}

function calc(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton").value;
}

function calc2(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton2").value;
}

function calc3(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton3").value;
}

function calc4(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton4").value;
}

function calc5(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton5").value;
}

function calc6(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton6").value;
}

function calc7(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton7").value;
}

function calc8(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton8").value;
}

function calc9(){
    document.getElementById("numero").value = document.getElementById("numero").value + document.getElementById("boton9").value;
}