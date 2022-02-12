const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 5
    },
    {
        nombre: "Base de datos 3",
        nota: 3
    },
    {
        nombre: "Matematicas Discretas 3",
        nota: 3
    },
    {
        nombre: "Programacion 3",
        nota: 1
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(() => { resolve(materia) }, Math.random() * 400);
    })
}


const devolverMaterias = async () => {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();


// cuando se usa el resolve o el reject, no hace falta utilizar un "else" porqe es igual que un return 

