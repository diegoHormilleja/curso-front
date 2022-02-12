var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/bdTareas');
var ToDoSchema = new Schema({
    titulo: 'String',
    completa: 'Number'
});

module.exports = mongoose.model('ToDo', ToDoSchema);