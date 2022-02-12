

// 2.   CREAR UN SCRIPT QUE DETERMINE LIBRO DE MAYOR PRECIO
function libro(titulo, autor, precio, categoria) {

	this.titulo = titulo;
	this.autor = autor;
	this.precio = precio;
	this.categoria = categoria;

}//libro

libro.prototype.clonar = function clonar() {
	var titulo = this.titulo;
	var autor = this.autor;
	var precio = this.precio;
	var categoria = this.categoria;

	return new libro(titulo, autor, precio, categoria);
}


function almacen() {
	// var libros = new Array(); Da error 
	// var this.libros = new Array(); Da error
	this.libros = new Array();
}//almacen

almacen.prototype.alta = function (libros_) {
	this.libros.push(libros_);
}



////////////////////////////////////
let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

var respuesta = null;

peticion.addEventListener("load", () => {
	if (peticion.status == 200) {
		respuesta = JSON.parse(peticion.response);
		ejercicio4();

	} else respuesta = "Lo siento, no se ha encontrado el recurso";


})
////////////////////////////////////


peticion.open("GET", "Libros.json");
peticion.send();



// plugin DataTable

function ejercicio4() {
	let ejercicio4 = document.getElementById("ejercicio4");
	ejercicio4.innerHTML = "<b></br></br> 4. plugin DataTable  </b> </br></br>";

	$(document).ready(function () {
		$('#example').DataTable({
			// 1.	Crea un Datatable con el contenido del fichero ordenadores.xls.
			"ajax": "libros_dataTable.txt",
			"columns": [
				{ "data": "titulo" },
				{ "data": "autor" },
				{ "data": "precio" },
				{ "data": "categoria" }
			],

			"paging": false,
			"info": false,

			// 3.	Ordenar la tabla por la columna autor de forma descendente.


			columnDefs: [
				{
					targets: [0, 1, 2],
					targets: [3],
					"visible": false,
					"searchable": false,
				}
			],
			order: [[1, 'desc'], [2, 'asc']],
		// 5.	Ocultar la columna categoria, y hacer que el control search de la tabla no tenga 
		// en cuenta esta columna.

		
		});
} );
}
//////FIN.








