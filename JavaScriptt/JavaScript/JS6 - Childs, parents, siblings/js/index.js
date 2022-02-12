

// childs
const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;
const primerHijoElement = contenedor.firstElementChild;

console.log(primerHijo);
console.log(primerHijoElement);

const hijos = contenedor.childNodes;
console.log('%c i am hijos array: ', 'color: red');
console.log(hijos);

console.log('%c soy for each: ', 'color: red');
hijos.forEach(hijo => console.log(hijo)); 

const hijosChildren = contenedor.children;
console.log('%c i am children: ', 'color: red');
console.log(hijosChildren);
for (hijo of hijosChildren) {
    console.log(hijo);
}

// metodos de childs 
 const parrafo = document.createElement("p").innerHTML = "parrafo";
 const h2_nuevo = document.createElement("h2");

 h2_nuevo.innerHTML = "Titulo";

 const h2_antiguo = document.querySelector(".h2");

 contenedor.replaceChild(h2_nuevo, h2_antiguo);

 contenedor.removeChild(h2_nuevo);

 let respuesta = contenedor.hasChildNodes();

 console.log("soy respuesta de hasChildNotes: " + respuesta);


 // propiedades de los parents (padres)

  let padre = contenedor.parentElement;

  console.log("soy el padre de contenedor: " + contenedor.parentElement);
  console.log("soy el padre de contenedor: " + padre);

  // propiedades de siblings (hermanos)

  const h4 = document.querySelector(".h4");
  console.log("soy el hermano de h4: " + h4.nextElementSibling);
  console.dir(h4.nextElementSibling.outerHTML);


  // nodos - extras
  const div = document.querySelector(".div-3");

  console.log(div.closest(".div"));