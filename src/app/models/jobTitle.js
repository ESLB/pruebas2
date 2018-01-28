var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PuestoLaboralSchema = new Schema({
    nombreEmpresa: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    area: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    sueldo: {
        type: String
    },
    distrito: {
        type: String
    },
    tipoTrabajo: {
        type: String
    },
    empresaImagen: {
        type: String,
        required: true
    }
});

mongoose.model('puestos', PuestoLaboralSchema, 'puestos');
