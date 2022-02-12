
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "pepito", "maria"],
        logica: ["Hernandez", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "pepito", "cofla", "maria"]

    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color: red"> ${profesor}</b><br> Los alumnos son: <b style="color:blue"> ${alumnos}</b><br><br>`);
    }
}


const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
        }
    }
    document.write(`<b style='color:blue> ${alumno} </b> esta en <b> ${cantidadTotal} clases </b><br> `);
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

cantidadDeClases("cofla");