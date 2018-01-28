var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    edad: {
        type: Number,
        required: false
    },
    email:{
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    perfilImagen:{
        type: String,
        trim: true
    },
    eventos: {
        type: [String]
    },
    puestos: {
        type: [String]
    }
});

mongoose.model('usuarios', UserSchema, 'usuarios');
