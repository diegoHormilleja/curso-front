// Tipo string
var saludo: string = 'Hola';
var texto: string = "Adios";
document.writeln(`${saludo} ${texto}`);

// number
let numero: number = 9;
let decimal: number = 6.4;
let hexadecimal: number = 0xf00d; //0x_______
let binary: number = 0b1101; // 0b__________
let octal: number = 0o75433; // 0o_________

document.writeln(`Numero: ${numero} Decimal:${decimal} Hexadecimal: ${hexadecimal} Binary: ${binary} Octal: ${octal}`);

// boolean
var soltero: boolean = true;
document.writeln(`Estas soltero? ${soltero} <br/>`);

// arrays
let nombres: string[] = ['Juan', 'Ana', 'Luis', 'Paco'];
let nombres2: Array<string> = ['Juan', 'Ana', 'Luis', 'Paco'];
let numeros: number[] = [1,2,3,4,5];

document.writeln(...nombres);
document.writeln("<br/>");
document.writeln(nombres2.toString() + "<br/>");
document.writeln(`${[...numeros]}`);

// enums
enum EstadoCivil{SOLTERO, CASADO, VIUDO, DIVORCIADO, PAREJAHECHO};
enum PuntosCardinales{NORTE, SUR, ESTE, OESTE};
var punto: PuntosCardinales = PuntosCardinales.NORTE;
document.writeln(`Punto Cardinal: ${punto}`);

enum Color {ROJO="rgb(255,0,0)", VERDE="rgb(0,255,0)", AZUL="rgb(0,0,255)"};
var miColor: Color = Color.AZUL;
// No funciona porque no es un numero (indice del array)
// document.writeln(`Color elegido: ${Color[miColor]} </br>`);

// any
var valor: any = 'Hola';
valor = 3;
valor = true;
valor = [1,2,3,4,5];
let varios: any[] = [1, true, 'hola'];

// void 
function mostrar(texto: string): void{
    document.writeln(texto);
}

mostrar('Hola');