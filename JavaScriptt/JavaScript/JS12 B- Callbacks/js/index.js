class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

// let cadenaVacia = "";
// let nulo = null;
// let sinDeclarar;

// console.log("SOY TIPO DE NULO --> " + typeof nulo);
// console.log("SOY TIPO DE sinDeclarar --> " + typeof sinDeclarar);


// let numero = 5;
// let numero_string = "5";

// if (numero == numero_string) {
//     console.log("somos iguales");
// };

// if (numero !== numero_string) {
//     console.log("no somos iguales");
// };


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

const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    } else {
        cb(null, personas[id], id);
    }
}

const obtenerInstagram = (id, cb) => {
    if (personas[id].instagram == undefined) {
        cb("No se ha encontrado el instagram");
    } else {
        cb(null, personas[id].instagram);
    }
}


obtenerPersona(3, (err, persona, id) => {
    if (err) console.log(err);
    else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instagram) => {
            if (err) console.log(err);
            else console.log(instagram);
        });
    }
})



