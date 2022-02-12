fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.text())
    .then(res=>console.log(res))

    // peticion POST

fetch("https://reqres.in/api/users", {
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Lucas",
        "apellido" : "Dalto"
    }),
    headers: {"Content-type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=>console.log(res))


    // imagen

const imagen = document.querySelector(".imagen");

fetch("2pac.jpg")
    .then(res=>res.blob())
 // .then(res=>console.log(res))
    .then(img=>imagen.src = URL.createObjectURL(img))

