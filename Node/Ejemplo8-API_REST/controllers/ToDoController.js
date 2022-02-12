var router = require('express').Router();
var ToDo = require('../models/ToDo.js');

// Obtener todas las tareas
router.get('/', function (req, res) {
    ToDo.find(function (err, list) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error getting tareas.'
                });
            }
            console.log(list);
            return res.json(list);
        } else {
            return res.send('No acepta JSON');
        }
    });
});

// Buscar una tarea
router.get('/:id', function (req, res) {
    var id = req.params.id;
    ToDo.findOne({_id:id}, function(err, tarea){
		if(req.accepts('json')) { 
			if(err) {
				return res.json(500, {
					message: 'Error getting tareas.'
				}); 
            }
            
            if(!tarea){
                return res.json(500, {
					message: 'No se pudo obtener la tarea.'
				}); 
            }

			return res.json(tarea); 
		} else {
		    return res.send('No acepta JSON');
		} 
	});
});

// Crear una tarea
router.post('/', function (req, res) {
    console.log(req.body);
    console.log("entro");

    var tarea = new ToDo({
        'titulo': req.body['titulo'],
        'completa': 0
    });

    tarea.save(function (err, t) {
        if (req.accepts('json')) {
            if (err) {
                return res.json(500, {
                    message: 'Error saving item.',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: t._id
            });
        } else {
            return res.send('No acepta JSON');
        }
    });
});

// Eliminar una tarea
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    ToDo.deleteOne({_id:id}, function(err, tarea){
		if(req.accepts('json')) { 
			if(err) {
				return res.json(500, {
					message: 'Error borrando tareas.'
				}); 
            }
            
            if(!tarea){
                return res.json(500, {
					message: 'No se pudo borrar la tarea.'
				}); 
            }

			return res.json({
                message: 'deleted',
                _id: t._id
            });
		} else {
		    return res.send('No acepta JSON');
		} 
	});
});

// Modificar una tarea
router.put('/:id', function (req, res) {
    var id = req.params.id;
    ToDo.update({_id:id}, function(err, tarea){
		if(req.accepts('json')) { 
			if(err) {
				return res.json(500, {
					message: 'Error modificando tareas.'
				}); 
            }
            
            if(!tarea){
                return res.json(500, {
					message: 'No se pudo modificar la tarea.'
				}); 
            }

			return res.json({
                message: 'Tarea Completada'
            });
		} else {
		    return res.send('No acepta JSON');
		} 
	});
});

module.exports = router;