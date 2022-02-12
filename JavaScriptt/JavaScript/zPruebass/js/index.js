

let nombre = "jorge";

{
    nombre = "pedro";
    console.log(nombre); // pedro
}

console.log(nombre);  // pedro


let $nombre = "Juan";

{
    let $nombre = "Manolo";
    console.log($nombre);  // Manolo
}

console.log($nombre);  //  Juan


let sinDeclarar;

if (sinDeclarar == null) {
    console.log("variable sinDeclarar es igual == a Null")
} else {
    console.log("Variable sinDeclarar no es igual == a Null");
}

if (sinDeclarar === null) {
    console.log("variable sinDeclarar es igual === a Null")
} else {
    console.log("Variable sinDeclarar no es igual === a Null");
}

console.log("variable sinDeclarar --> " + sinDeclarar);


// arrays

sinDeclarar = new Array(10).fill(null).map(()=> ({'hello':'goodbye'}))

sinDeclarar[2] = "claro_que_si";

console.log(sinDeclarar);



////////////////////////////////


let alumnos = [
    {
        nombre: "Lucas",
        email: "lucas@gmail.com",
        materia: "Fisica Cuantica"
    },
    {
        nombre: "Javier",
        email: "javier@gmail.com",
        materia: "Integrales"
    },
    {
        nombre: "Roberto",
        email: "roberto@gmail.com",
        materia: ["Lenguaje", "indiscreto", "Lenguaje", "indiscreto"]
    },
    {
        nombre: "Manin",
        email: "manin@gmail.com",
        materia: "Manito lerele"
    }
]

for (alumno of alumnos) {
    for (var [key, value] of Object.entries(alumno)) {
        console.log(key + ' -> ' + value); // "a 5", "b 7", "c 9"
    }
}




/////////////////////////////////////////////////////



const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let repeticiones = 1; // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    console.log(sorted_arr);
    let results = [];

    for (let i = 0; i < sorted_arr.length; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            repeticiones++;
        }
        // no hay repeticion 
        else {

            // si acaba una repeticion
            if (repeticiones != 1) {
                results.push([sorted_arr[i], repeticiones]);
                repeticiones = 1;
            }

        }
    }

    return results;
}

let duplicatedArray = ["Lila", "Lila", "carpìo", "mamila", "lerel", "rosa", "xcd", "main", "Lila", "rosa"];
let duplicadas = findDuplicates(duplicatedArray);

console.dir(duplicadas);

console.log(`The duplicates in ${duplicatedArray} are ${duplicadas}`);



////////////////////
