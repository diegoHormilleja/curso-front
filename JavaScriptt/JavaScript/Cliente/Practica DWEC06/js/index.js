

// 2.   CREAR UN SCRIPT QUE DETERMINE LIBRO DE MAYOR PRECIO
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
	// var libros = new Array(); Da error 
	// var this.libros = new Array(); Da error
	this.libros = new Array();
}//almacen

almacen.prototype.alta = function (libros_) {
	this.libros.push(libros_);
}

almacen.prototype.precioMaximo = function () {
	var precioMax, x, n = this.libros.length;
	if (n == 0) return -1; //si no hay libros retorno -1

	precioMax = this.libros[0].price;
	for (x = 1; x <= n - 1; x++) { // recorro desde el último al primero
		if (this.libros[x].price > precioMax) {
			precioMax = this.libros[x];
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
		ejercicio2(respuesta);
		ejercicio3(respuesta);
		ejercicio4();

	} else respuesta = "Lo siento, no se ha encontrado el recurso";


})
////////////////////////////////////


peticion.open("GET", "bookStore.json");
peticion.send();


function ejercicio2(respuesta) {
	var a = new almacen(), x;

	for (var indice in respuesta) {
		a.alta(respuesta[indice]);
	}

	let ejercicio2 = document.getElementById("ejercicio2");
	ejercicio2.innerHTML = "<b>2. Crear un script que determine a partir del fichero JSON cuál es el libro de mayor precio: </b> </br></br> ";
	ejercicio2.innerHTML += '"' + a.precioMaximo().title.__text + '" es el libro de mayor precio, ya que vale: ' + a.precioMaximo().price + "$</br></br></br>";



}
//// FIN 2.



// 3.   CREAR UNA PLANTILLA UTILIZANDO HANDLEBARS

function ejercicio3(respuesta) {
	let ejercicio3 = document.getElementById("ejercicio3");
	ejercicio3.innerHTML = "<b>3. Crear una plantilla utilizando el plugin de handlebars para representar los datos JSON en una tabla </b> </br></br>";

	$(function () {

		var template = Handlebars.compile($("#table-template").html());
		var data = respuesta;

		$('#stemplate tbody').html(template(data));
	});
}
//////FIN 3.



// 4.  plugin DataTable

function ejercicio4() {
	let ejercicio4 = document.getElementById("ejercicio4");
	ejercicio4.innerHTML = "<b></br></br> 4. plugin DataTable  </b> </br></br>";

	$(document).ready(function() {
		$('#example').DataTable( {
		// 1.	Crea un Datatable con el contenido del fichero ordenadores.xls.
			"ajax": "libros_dataTable.txt",
			"columns": [
				{ "data": "title.__text" },
				{ "data": "author" },
				{ "data": "year" },
				{ "data": "price" },
				{ "data": "_category" }					
			],
		
			"paging":   false,
			"info":     false,

		// 3.	Ordenar la tabla por la columna author de forma descendente.
			"order": [[ 1, "desc" ]], 
	

		 columnDefs: [ 
			{
				targets: [ 1 ],
				orderData: [ 1, 0 ]
			},	
		// 5.	Ocultar la columna precio, y hacer que el control search de la tabla no tenga 
		// en cuenta esta columna.
		  {
				targets: [ 3 ],
				"visible": false,
				"searchable": false,
		  }],
		
		} );
	} );
}
//////FIN 4.








