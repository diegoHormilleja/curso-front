const button = document.querySelector(".button");
let abb = "makina";

button.addEventListener("click", (e)=> {
    console.log(e);
});

// function saludar() {
//     alert("hola");
// }


const contenedor__button = document.querySelector(".contenedor__button");
const contenedor = document.querySelector(".contenedor");

contenedor__button.addEventListener("click", ()=> {
    alert("clickas en botton");
});

contenedor.addEventListener("click", ()=> {
    alert("clickas en contenedor");
});  


// Eventos de la interfaz --> "select"

const input = document.querySelector(".input-prueba");
const contenedor2 = document.querySelector(".seleccionado");

input.addEventListener("select", (e) => {
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor2.innerHTML = textoCompleto.substring(start,end);
})


