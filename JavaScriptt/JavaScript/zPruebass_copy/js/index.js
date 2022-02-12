
let arr = ["ant", "xx", "xcdfvsd", "bdd", "sdlf"];

console.log(arr);

const ordenar = (arr) => {
    let arr_ordenado = arr.sort();
    return arr_ordenado;
}

ordenar(arr);

console.log(arr);


//////////////////////

let num = 10;
let resultado = 0;
let hazmeRaiz = 0; 

for (let i = 1; i <= 4; i++) {
    resultado = num << i;
    document.write(` ${num} << ${i} = ${resultado} </br>`);

    
    hazmeRaiz = Math.pow(2, i);
    document.write(`La raíz  de 2 a la ${i} es ${Math.sqrt(Math.pow(2, i))}</br>`);
    
}


