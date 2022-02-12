
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + i), 0];

}

console.table(alumnosTotales);

let presencia = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < alumnosTotales.length; j++) {
        presencia = prompt(" Día " + i + " Esta presente " + alumnosTotales[j]);
        if (presencia == 'p') {
            alumnosTotales[j][1]++;
        }

    }
}

const mostrar = (alumnos) => {
    document.write(alumnos[0] + " ha venido " + alumnos[1] + " dias </br>");
}

for (let i = 0; i < alumnosTotales.length; i++) {
    mostrar(alumnosTotales[i]);
}