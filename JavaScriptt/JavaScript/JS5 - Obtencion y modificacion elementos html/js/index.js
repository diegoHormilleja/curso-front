

const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent;

titulo.textContent = "<b>lololo</b>";

console.log("soy inner: " + titulo.innerHTML);


//
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("li");

const textDelItem = document.createTextNode("Este es un item de la lista");

item.appendChild(textDelItem);

contenedor.appendChild(item);

console.log(item);


