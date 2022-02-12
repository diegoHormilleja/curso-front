var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var PersonaSchema = new mongoose.Schema({
    nombre: 'String',
    apellido: 'String',
    edad: 'Number'
});

module.exports = mongoose.model('Persona', PersonaSchema);