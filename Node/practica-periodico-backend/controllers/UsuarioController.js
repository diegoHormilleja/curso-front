var usuarios = require('express').Router();
Usuario = require('../models/Usuario.js');
var passport = require('passport');
var Account = require('../models/account');

usuarios.post('/usuario/login', passport.authenticate('local'), function(req, res) {
	console.log("Autenticado");
	res.json({ 
		message: 'Login con éxito'
	}); 
});


//Añadir un usuario
usuarios.post('/usuario', function(req,res){

    var usuario = new Usuario({ 
		'nombre': req.body['firstName'],
		'apellido': req.body['lastName'],
		'email': req.body['username'],
        'password': req.body['password'],
        'comentarios': [],
        'admin': false
    });
	
	Account.register(new Account({username: req.body['username']}), req.body['password'], function(err, account){
		if(err){
		  console.log(err);
		}
		passport.authenticate('local');
	});
    
    usuario.save(function(err, usuario){
        if(req.accepts('json')) {
			if(err) {
				return res.json(500, {
                           message: 'Error del servidor',
                           error: err
				}); 
			}
			return res.json({ 
				message: 'Usuario guardado con éxito',
				_id: usuario._id 
			}); 
		} else {
			if(err){
				return res.send('500: Internal Server Error', 500); 
			}
			//return res.render();	
		} 
    });
});


//Añadir un comentario
usuarios.put('/:noticiaID/:usuarioID/comentario', function(req, res){
	var id = req.params['usuarioID'];
	Usuario.findByIdAndUpdate({ _id: id },  {$push: { comentarios: req.body['comentario'] }}, function(err, usuario){
		if(req.accepts('json')) { 
			if(err) {
				return res.json(500, {
					message: 'Error del servidor'
				}); 
			}
			if(!usuario) {
				return res.json(404, {
                	message: 'No existe el usuario'
				}); 
			}
			return res.json(usuario); 
		} else {
			if(err) {
				return res.send('500: Internal Server Error', 500);
			}
			if(!usuario) {
				return res.end('No existe el usuario');
			}
			//return res.render();
		} 
    });
});





module.exports = usuarios;