let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");


// const peticion = new XMLHttpRequest();

// console.log(peticion);

peticion.addEventListener("load", () => {
    // console.log(peticion.readyState);
    // console.log(peticion.response);
    // if (peticion.readyState == 4 && peticion.status == 200) {
    //     console.log(peticion.response);
    // }
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta).nombre);
})

peticion.open("GET", "informacion.txt");

peticion.send();

// console.log(peticion);
  

// PETICION POST

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load", ()=> {
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta));
})

peticion.open("POST", "https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify({
    "nombre": "morfeo",
    "trabajo": "líder"
}))