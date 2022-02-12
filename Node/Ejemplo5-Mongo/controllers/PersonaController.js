var personas = require('express').Router(),
    Persona = require('../models/Persona.js');

// Mostrar todos los documentos
personas.get('/', function (req, res) {
    Persona.find(function (err, list) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting personas.'
                });
            }
            return res.json(list);
        } else {
            if (err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('personas/index', { personas: personas });
        }
    });
});

// Buscar un documento por su id
personas.get('/:id', function (req, res) {
    var id = req.params.id;
    Persona.findOne({ _id: id }, function (err, persona) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting persona.'
                });
            }
            if (!persona) {
                return res.json(404, {
                    message: 'No such persona.'
                });
            }
            return res.json(persona);
        } else {
            if (err) {
                return res.send('500: Internal Server Error', 500);
            }
            if (!persona) {
                return res.end('No such persona');
            }
            return res.render('personas/edit', { persona: persona, flash: 'Created.' });
        }
    });


});

// Alta
personas.post('/', function (req, res) {
    var persona = new Persona({
        'nombre': req.body['nombre'],
        'apellido': req.body['apellido'],
        'edad': req.body['edad']
    });

    persona.save(function (err, persona) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error saving item.',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: persona._id
            });
        } else {
            if (err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('personas/edit', { persona: persona });
        }
    });
});

// Borrar un documento por id
personas.delete('/:id', function (req, res) {
    var id = req.params.id;
    Persona.deleteOne({ _id: id }, function (err, persona) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting persona.'
                });
            }
            if (!persona) {
                return res.json(404, {
                    message: 'No such persona.'
                });
            }
            return res.json({
                message: 'deleted'
            });
        } else {
            if (err) {
                return res.send('500: Internal Server Error', 500);
            }
            if (!persona) {
                return res.end('No such persona');
            }
            return res.render('personas/edit', { persona: persona, flash: 'Created.' });
        }
    });
});


// Modificar un documento por id
//Modificar uin documento por id
personas.put('/:id', function (req, res) {
    console.log("En put");
    var id = req.params.id;
    Persona.findByIdAndUpdate(id, req.body, function (err, persona) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error puting persona.'
                });
            }
            if (!persona) {
                return res.json(404, {
                    message: 'No such persona.'
                });
            }
            return res.json({
                message: 'Modified.'
            });
        } else {
            if (err) {
                return res.send('500: Internal Server Error', 500);
            }
            if (!persona) {
                return res.end('No such persona');
            }
            return res.render('personas/edit', { persona: persona, flash: 'Created.' });
        }
    });
});

module.exports = personas;