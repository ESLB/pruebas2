var express = require('express');

//BASE DE DATOS
var {mongoose} = require('./app/db/mongoose');
var {Evento} = require('./app/models/todo');
var {Usuario} = require('./app/models/user');
var {PuestoLaboral} = require('./app/models/jugador');

var app = express();

//SERVIDOR
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
