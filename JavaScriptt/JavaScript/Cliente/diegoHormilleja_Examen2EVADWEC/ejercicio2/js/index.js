

// a.   CREAR UN SCRIPT QUE DETERMINE COCHE DE MAYOR PRECIO
function coche(matricula, marca, modelo, color, precio, extras, codigoCliente) {

	this.matricula = matricula;
	this.marca = marca;
	this.modelo = modelo;
	this.color = color;
	this.precio = precio;
	this.extras = extras;
	this.codigoCliente = codigoCliente;

}//coche

coche.prototype.clonar = function clonar() {
	var matricula = this.matricula;
	var marca = this.marca;
	var modelo = this.modelo;
	var color = this.color;
	var precio = this.precio;
	var extras = this.extras;
	var codigoCliente = this.codigoCliente;


	return new coche(matricula, marca, modelo, color, precio, extras, codigoCliente);
}


function almacen() {

	this.coches = new Array();
}//almacen

almacen.prototype.alta = function (coches_) {
	this.coches.push(coches_);
}

almacen.prototype.precioMaximo = function () {
	var precioMax, x, n = this.coches.length;
	if (n == 0) return -1; //si no hay coches retorno -1

	console.log("longitud -->" + n);

	precioMax = this.coches[0];
	for (x = 1; x <= n - 1; x++) { // recorro desde el último al primero
		if (this.coches[x].precio > precioMax.precio) {
			precioMax = this.coches[x];
		}
	}
	return precioMax;
}//precioMaximo


////////////////////////////////////
let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

var respuesta = null;

peticion.addEventListener("load", () => {
	if (peticion.status == 200) {
		respuesta = JSON.parse(peticion.response);
		ejercicioA(respuesta);
		ejercicioB(respuesta);

	} else respuesta = "Lo siento, no se ha encontrado el recurso";


})
////////////////////////////////////


peticion.open("GET", "Almacen.json");
peticion.send();


function ejercicioA(respuesta) {
	var a = new almacen(), x;

	for (var indice in respuesta) {
		a.alta(respuesta[indice]);
	}

	var cocheMax = a.precioMaximo();

	let enunciado = document.getElementById("enunciado");
	enunciado.innerHTML = "<b><span class='grande'> 2. Crea un fichero con formato JSON que se llame Almacen.Json </b></br></br></br>";

	let ejercicioA = document.getElementById("ejercicioA");
	ejercicioA.innerHTML = "<b>a. Crear un script que determine a partir del fichero JSON cuál es el coche de mayor precio: </b> </br></br> ";
	ejercicioA.innerHTML += '"' + cocheMax.marca + " " + cocheMax.modelo + '" es el coche de mayor precio, ya que vale: ' + a.precioMaximo().precio + "$</br></br></br>";



}
//// FIN a.



// b.   CREAR UNA PLANTILLA UTILIZANDO HANDLEBARS

function ejercicioB(respuesta) {
	let ejercicioB = document.getElementById("ejercicioB");
	ejercicioB.innerHTML = "<b>b. Crear una plantilla utilizando el plugin de handlebars para representar los datos JSON en una tabla </b> </br></br>";

	$(function () {

		var template = Handlebars.compile($("#table-template").html());
		var data = respuesta;

		$('#stemplate tbody').html(template(data));
	});
}
//////FIN b.












