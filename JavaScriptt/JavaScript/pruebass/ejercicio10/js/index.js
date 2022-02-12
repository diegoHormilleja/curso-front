


$().ready(function () {
    // $.validator.addMethod("formAge", function (value, element) {
    //     var pattern = /^(?:100|1[8-9]|[2-9][0-9])$/;
    //     return this.optional(element) || pattern.test(value);
    // }, "La edad debe estar comprendida entre 18 y 100");

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Solo letras porfavor");


    $.validator.addMethod("formNIF", function (value, element) {
        var pattern = /^\d{2}.\d{3}.\d{3}-[a-z]$/;
        return this.optional(element) || pattern.test(value);
    }, "Formato deseado dd.ddd.ddd-l");


    $.validator.addMethod("formTfn", function (value, element) {
        var pattern = /^[0-9]{2,2}(4|6|8)[0-9]{6,6}$/;
        return this.optional(element) || pattern.test(value);
    }, "Teléfonos de Zgz, Huesca o Teruel");


    $.validator.addMethod("rebaja", function (value, element) {
        value = $.trim(value.toLowerCase());
        if (this.optional(element) || /^((?!rebaja).)*$/i.test(value)) {
            return true;
        }
        else {
            return false;
        }

    }, "No se aceptan comentarios con la palabra rebaja ");



    $("#formcontacto").validate({
        rules: {
            nombre: { required: true, minlength: 4, lettersonly: true },
            apellido: { required: true, minlength: 4, lettersonly: true },
            segundoApellido: { required: true, minlength: 4, lettersonly: true },
            edad: { required: true, digits: true, min: 18, max: 100 },
            nif: { required: true, formNIF: true },
            telefono: { required: true, minlength: 2, maxlength: 15, formTfn: true },
            comentarios: { required: true, minlength: 10, rebaja: true }
        },
        errorElement: 'span'
    });
});