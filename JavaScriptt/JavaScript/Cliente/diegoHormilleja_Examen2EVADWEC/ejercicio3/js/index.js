

//
function ordenador(marca, modelo, hd, ram, so, precio) {

	this.marca = marca;
	this.modelo = modelo;
	this.hd = hd;
	this.ram = ram;
	this.so = so;
	this.precio = precio;


}//ordenador

ordenador.prototype.clonar = function clonar() {
	var marca = this.marca;
	var modelo = this.modelo;
	var hd = this.hd;
	var ram = this.ram;
	var so = this.so;
	var precio = this.precio;


	return new ordenador(marca, modelo, hd, ram, so, precio);
}


function almacen() {
	this.ordenadores = new Array();
}//almacen

almacen.prototype.alta = function (ordenadores_) {
	this.ordenadores.push(ordenadores_);
}



////////////////////////////////////
let peticion;

if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");

var respuesta = null;

peticion.addEventListener("load", () => {
	if (peticion.status == 200) {
		respuesta = JSON.parse(peticion.response);
		ejercicio3();

	} else respuesta = "Lo siento, no se ha encontrado el recurso";


})
////////////////////////////////////


peticion.open("GET", "Ordenadores.json");
peticion.send();



// plugin DataTable

function ejercicio3() {

	let ejercicio3 = document.getElementById("ejercicio3");
	ejercicio3.innerHTML = "<b></br></br> 3. plugin DataTable  </b> </br></br>";

	$(document).ready(function () {
		$('#example').DataTable({
			// 1.	Crea un Datatable con el contenido del fichero ordenadores.xls.
			"ajax": "ordenadores_dataTable.txt",
			"columns": [
				{ "data": "marca" },
				{ "data": "modelo" },
				{ "data": "hd" },
				{ "data": "ram" },
				{ "data": "so" },
				{ "data": "precio" }

			],

			"paging": false,
			"info": false,


			columnDefs: [
				{
					targets: [0, 1, 3, 4, 5],
			// 3. Ocultar la columna HD, y hacer que el control search de la tabla no tenga en cuenta esta columna
					targets: [2],
					"visible": false,
					"searchable": false,
				}
			],

			// 2.	Ordenar la tabla por la columna marca, en caso de que coincida primero la de menor precio
			order: [[0, 'asc'], [5, 'asc']],

		
		});
} );
}
//////FIN.








