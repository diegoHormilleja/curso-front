

//
// 
function libro(title, author, year, price, _category) {

	this.title = title;
	this.author = author;
	this.year = year;
	this.price = price;
	this._category = _category;

}//libro

libro.prototype.clonar = function clonar() {
	var title = this.title;
	var author = this.author;
	var year = this.year;
	var price = this.price;
	var _category = this._category;

	return new libro(title, author, year, price, _category);
}


function almacen() {
	this.libros = new Array();
}//almacen

almacen.prototype.alta = function (libros_) {
	this.libros.push(libros_);
}


//ejercicioA
almacen.prototype.longitud = function () {
	return this.libros.length;
}//FIN ejercicioA


//ejercicioB
almacen.prototype.precioLimites = function (inferior, superior) {
	var n = this.libros.length;
	if (n == 0) return -1; //si no hay libros retorno -1
	let libros_en_intervalo = [];

	for (x = 0; x <= n - 1; x++) { // recorro desde el último al primero
		if (this.libros[x].price > inferior && this.libros[x].price < superior) {
			libros_en_intervalo.push(this.libros[x]);
		}
	}

	return libros_en_intervalo;
}//FIN ejercicioB



//ejercicioC
almacen.prototype.startBy = function (cadena) {
	var n = this.libros.length;
	if (n == 0) return -1; //si no hay libros retorno -1
	let libros_con_cadena = [];

	for (x = 0; x <= n - 1; x++) { // recorro desde el último al primero
		if (this.libros[x].title.startsWith(cadena)) {
			libros_con_cadena.push(this.libros[x]);
		}
	}

	return libros_con_cadena;
}//FIN ejercicioC



//ejercicioD
almacen.prototype.titulos_autores = function () {
	let html = "";

	for (let i = 0; i < this.libros.length; i++) {
		html += "<b>Titulo: </b>" + this.libros[i].title + ", <b>Autor/es: </b>" + this.libros[i].author + "</br>";

	}

	return html;
}// FIN ejercicioD





////////////////////////////////////
let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

var respuesta = null;

peticion.addEventListener("load", () => {
	if (peticion.status == 200) {
		respuesta = JSON.parse(peticion.response);
		respuesta = respuesta.bookstore.book;
		ejercicio4(respuesta);


	} else respuesta = "Lo siento, no se ha encontrado el recurso";


})
////////////////////////////////////


peticion.open("GET", "libreria.json");
peticion.send();



function ejercicio4(respuesta) {
	var a = new almacen(), x;

	for (var indice in respuesta) {
		a.alta(respuesta[indice]);
	}

	let enunciado = document.getElementById("enunciado");
	enunciado.innerHTML = "<b><span class='grande'> 4. Escribe un programa en JavaScript que lea el fichero libreria.json y muestra la siguiente info: </b></br></br>";

	//ejericioA
	let ejercicioA = document.getElementById("ejercicioA");
	ejercicioA.innerHTML = "<b> <span class='red'> A. ¿Cuantos libros hay? </b></br>";
	ejercicioA.innerHTML += "Hay " + a.longitud() + " libros </br></br> ";
	//fin ejercicioA


	//ejercicioB
	let ejercicioB = document.getElementById("ejercicioB");
	let inferior = 0;
	let superior = 40;
	ejercicioB.innerHTML = "<b> <span class='red'> B. Libros entre " + inferior + "$ y" + superior + "$ </b> </br> ";
	let libros = a.precioLimites(inferior, superior);
	console.log(libros);
	if (libros.length != 0) {
		for (let i = 0; i < libros.length; i++) {
			ejercicioB.innerHTML += "<b>Titulo: </b>" + libros[i].title + ", <b>Precio: </b>" + libros[i].price + "$</br>";
		}
	} else {
		ejercicioB.innerHTML += "No hay libros con esos parametros";
	}
	//fin ejercicioB



	//ejercicioC
	let ejercicioC = document.getElementById("ejercicioC");
	let cadena = "Every";
	ejercicioC.innerHTML = "</br> <b> <span class='red'> C. Libros que empiezan por '" + cadena + "' </b> </br> ";
	let libros_cadena = a.startBy(cadena);
	console.log(libros_cadena);
	if (libros_cadena.length != 0) {
		for (let i = 0; i < libros_cadena.length; i++) {
			ejercicioC.innerHTML += "<b>Titulo: </b>" + libros_cadena[i].title + ", <b>Year: </b>" + libros_cadena[i].year + "</br>";
		}
	} else {
		ejercicioC.innerHTML += "No hay libros con esos parametros";	
	}//fin ejercicioC;


	
	//ejercicioD
	let ejercicioD = document.getElementById("ejercicioD");
	ejercicioD.innerHTML = "</br> <b> <span class='red'> D. Muestra todos los titulos con los autores</br> ";
	ejercicioD.innerHTML += a.titulos_autores();
	//fin EjercicioD


}










