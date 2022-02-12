var mongoose = require('mongoose');
Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/periodico');

var usuarioSchema = new Schema({
    nombre: 'String',
    apellido: 'String',
    email: 'String',
    password: 'String',
    comentarios: [String],
    admin: 'Boolean'
});

module.exports = mongoose.model('Usuario', usuarioSchema);