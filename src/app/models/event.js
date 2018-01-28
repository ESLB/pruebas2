var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    fecha:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    eventoImagen:{
        type: String
    },
    universidad: {
        type: String,
        required: true
    },
    aforo: {
        type: Number
    }
});

mongoose.model('eventos', EventoSchema, 'eventos');
