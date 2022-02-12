var contador = 10;
var mapa;
var tipoMapa = google.maps.MapTypeId.value;

function mostrar_mapa() {
    // comprobar si mi navegador soporta geolocalizacion
    if (navigator.geolocation) {
        // Obtener la posicion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert("tu navegador no soporta geolocalizacion");
    }

    // Mostrar el mapa
    var opciones = {
        zoom:contador,
        mapTypeId:tipoMapa
    };
    mapa = new google.maps.Map(document.getElementById("seccion_mapa"), opciones);
}

function mostrarLocalizacion(posicion){
    // Obtener las coordenadas y con ellas me genero un objeto de Google
    var pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
    alert(pos);

    // Mostrar la ubicacion en el mapa
    var infowindow = new google.maps.InfoWindow({map: mapa, position: pos, content: 'Estas aqui'});

    /* 
    var pos = new google.maps.LatLng(41.636941,-0.899664);

    var infoWindow = new google.maps.InfoWindow({map: mapa, position: pos, content: "Hiberus esta aqui"});
    */

    // Pedimos que nos centre el mapa
    mapa.setCenter(pos);
}

function manejarError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("No tienes permiso de usuario");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("No se puede detectar ubicacion");
            break;
        case error.TIMEOUT:
            alert("Tiempo de espera agotado");
            break;
        case error.UNKNOW_ERROR:
            alert("Error desconocido");
            break;
    }
}

    // manera elegante de hacer lo que haciamos en el onload del body
google.maps.event.addDomListener(window, 'load', mostrar_mapa());

function funAmpliar() {
    contador++;
    mostrar_mapa();
}

function funReducir() {
    contador--;
    mostrar_mapa();
}

function funCambio() {
    switch (tipo.value) {
        case "ROADMAP":
            tipoMapa = google.maps.MapTypeId.ROADMAP;
            break;
        case "SATELLITE":
            tipoMapa = google.maps.MapTypeId.SATELLITE;
            break;
        case "HYBRID":
            tipoMapa = google.maps.MapTypeId.HYBRID;
            break;
         case "TERRAIN":
            tipoMapa = google.maps.MapTypeId.TERRAIN;
            break;
    }
    mostrar_mapa();
}

function change(){
    tipoMapa = "google.maps.MapTypeId." + select.value;
    alert(tipoMapa);
    mostrar_mapa();
}