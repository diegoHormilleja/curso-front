class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};


const data = [
    ["Lucas Dalto", "@SoyDalto"],
    ["Robertico", "@Robertico"],
    ["RancioRamirez", "@RancioRamirez"],
    ["Camila Nesa"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) reject("No se ha encontrado la persona");
        else { resolve(personas[id]) };
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else { resolve(personas[id].instagram) };
    })
}

let id = 3;

obtenerPersona(id).then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);

}).then((instagram) => {
    console.log(instagram)
}).catch((e) => {
    console.log(e);
    // console.error(e);
})




////////////////////
let nombre = "perro";

const promesa = new Promise((resolve, reject) => {
    if (nombre !== "pedro") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
})

promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => {
    console.log(e);
})

