// ! ACORDARSE DE QUE HAY QUE QUITAR EL SERVER Y VOLVERLO A INICIAR CON CADA CAMBIO
// ? Formato Fecha -> 2016-05-18T16:00:00.000Z

var router = require('express').Router();
var Noticia = require('../models/Noticia.js');

// * Obtener todas las noticias
router.get('/', function (request, response) {
    console.log(response.json);
    Noticia.find(function (error, list) {
        if (request.accepts('json')) {
            if (error) {
                return response.json(500, {
                    message: "Error, no se podido conseguir ninguna noticia."
                });
            }
            return response.json(list);
        } else {
            return response.send("No se ha aceptado el json.");
        }
    });
});

// * Buscar noticias por ID
router.get('/:id', function (request, response) {
    var id = request.params.id;
    Noticia.findOne({ _id: id }, function (error, noticia) {
        if (request.accepts('json')) {
            if (error) {
                return response.json(500, {
                    message: "Error al intentar acceder a la noticia."
                });
            }
            if (!noticia) {
                return response.json(404, {
                    message: 'No existe esa noticia.'
                });
            }
            return response.json(noticia);
        } else {
            return response.send("No se ha aceptado el json.");
        }
    });
})

// * Crear una noticia
router.post('/', function (request, response) {
    var noticia = new Noticia({
        'title': request.body['title'],
        'description': request.body['description'],
        'image': request.body['image'],
        'author': request.body['author'],
        'date': request.body['date'],
        'location': request.body['location']
    });

    noticia.save(function (err, noticia) {
        if (request.accepts('json')) {
            if (err) {
                return response.json(500, {
                    message: 'Error al crear la noticia.',
                    error: err
                });
            }
            return response.json({
                message: 'La noticia se ha creado con exito.',
                _id: noticia._id
            });
        } else {
            return response.send("No se ha aceptado el json.");
        }
    });
});

// * Eliminar una noticia
router.delete('/:id', function (request, response) {
    var id = request.params.id;
    Noticia.deleteOne({ _id: id }, function (err, noticia) {
        if (request.accepts('json')) {
            if (err) {
                return response.json(500, {
                    message: 'Error al intentar eliminar la tarea.'
                });
            }
            if (!noticia) {
                return response.json(404, {
                    message: 'No existe esa noticia.'
                });
            }
            return response.json({
                message: "Se ha eliminado la noticia"
            });
        } else {
            return response.send("No se ha aceptado el json.");
        }
    });
});


// * Modificar una noticia
router.put('/:id', function (request, response) {
    var id = request.params.id;
    Noticia.update({ _id: id }, {
        title: request.body['title'], description: request.body['description'],
        image: request.body['image'], author: request.body['author'], date: request.body['date'], location: request.body['location'],
    }, function (err, noticia) {
        if (request.accepts('json')) {
            if (err) {
                return response.json(500, {
                    message: 'Error modficiando la noticia.'
                });
            }
            if (!noticia) {
                return response.json(404, {
                    message: 'No se pudo modificar la noticia.'
                });
            }
            return response.json({
                message: "Noticia modificada"
            });
        } else {
            return response.send("No se ha aceptado el json.");
        }
    });
});

module.exports = router;