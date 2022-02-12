var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    
var NoticiaSchema = new Schema({
    title: 'String',
    description: 'String',
    image: 'String',
    author: 'String',
    date: 'date',
    location: 'String'
});

module.exports = mongoose.model("Noticia", NoticiaSchema);