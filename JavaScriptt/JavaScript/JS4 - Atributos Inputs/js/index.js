

const input = document.querySelector(".input-normal");
input.type = "range";

// document.write(input.className);
 
// input type file
const inputFile = document.querySelector(".input-file");
inputFile.accept = "image/png";

// document.write(inputFile.className);

const inputFormulario = document.querySelector(".input-formulario");
// inputFormulario.minLength = "4";
inputFormulario.setAttribute("minLength", "4");

inputFormulario.required = " ";

// 
// const titulo = document.querySelector(".titulo");
const titulo = document.getElementById("titulo-h1");
let clasesTitulo = new Array();

for(let i = 0; i < titulo.classList.length; i++) {
    clasesTitulo[i] = titulo.classList.item(i);
}

console.dir(clasesTitulo);

for(let i = 0; i < clasesTitulo.length; i++){
    document.write(clasesTitulo[i]);
}

titulo.style = "color: #a22; outline: 2px solid green";

let valor = titulo.classList.item(1);
document.write(valor);