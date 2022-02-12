


$().ready(function () {


    $.validator.addMethod("expresion", function (value, element) {
        var pattern = /^[Aa-hH]$/;
        return this.optional(element) || pattern.test(value);
    }, "[Aa-hH] porfavor");


    $("#formcontacto").validate({
        rules: {
            nombre: { required: true, expresion: true }
        },
        errorElement: 'span'
    });
});