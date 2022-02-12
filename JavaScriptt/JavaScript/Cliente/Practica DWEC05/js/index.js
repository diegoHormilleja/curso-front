


$().ready(function () {
    // $.validator.addMethod("formAge", function (value, element) {
    //     var pattern = /^(?:100|1[8-9]|[2-9][0-9])$/;
    //     return this.optional(element) || pattern.test(value);
    // }, "La edad debe estar comprendida entre 18 y 100");


    $.validator.addMethod("formNIF", function (value, element) {
        var pattern = /^\d{2}.\d{3}.\d{3}-[Aa-zZ]$/;
        return this.optional(element) || pattern.test(value);
    }, "Formato deseado dd.ddd.ddd-l");


    $.validator.addMethod("formTfn", function (value, element) {
        var pattern = /^[0-9]{2,2}(4|6|8)[0-9]{6,6}$/;
        return this.optional(element) || pattern.test(value);
    }, "Teléfonos de Zgz, Huesca o Teruel");



    $("#formcontacto").validate({
        rules: {
            nombre: { required: true, minlength: 4 },
            apellido: { required: true, minlength: 4 },
            segundoApellido: { required: true, minlength: 4 },
            edad: { required: true, digits: true, min: 18, max: 100 },
            email: { required: true, email: true },
            nif: { required: true, formNIF: true },
            telefono: { required: true, minlength: 2, maxlength: 15, formTfn: true },
            comentarios: { required: true, minlength: 10 }
        },
        errorElement: 'span'
    });
});