var mapa;

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
        zoom:6,
        mapTypeId:google.maps.MapTypeId.TERRAIN
    };
    mapa = new google.maps.Map(document.getElementById("seccion_mapa"), opciones);
}

function mostrarLocalizacion(posicion){
    // Obtener las coordenadas y con ellas me genero un objeto de Google
    var pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
    alert(pos);

    // Mostrar la ubicacion en el mapa
    var infowindow = new google.maps.InfoWindow({map: mapa, position: pos, content: 'Estas aqui'});

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
google.maps.event.addDomListener(window, 'load', mostrar_mapa);