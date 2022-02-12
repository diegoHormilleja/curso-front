function mostrar(){
    var string = "dato";
    document.getElementById('string').innerHTML = "<b>" + string + "</b>";
    document.getElementById('string_tipo').innerText = typeof(string);

    var number = 8;
    document.getElementById('number').innerHTML = "<b>" + number + "</b>";
    document.getElementById('number_tipo').innerText = typeof(number);

    var boolean = true;
    document.getElementById('boolean').innerHTML = "<b>" + boolean + "</b>";
    document.getElementById('boolean_tipo').innerText = typeof(boolean);

    var object = new Date();
    document.getElementById('object').innerHTML = "<b>" + object + "</b>";
    document.getElementById('object_tipo').innerText = typeof(object);

    var dato_null = null;
    document.getElementById('dato_null').innerHTML = "<b>" + dato_null + "</b>";
    document.getElementById('dato_null_tipo').innerText = typeof(dato_null);

    var undefined = undefined;
    document.getElementById('undefined').innerHTML = "<b>" + undefined + "</b>";
    document.getElementById('undefined_tipo').innerText = typeof(undefined);



}