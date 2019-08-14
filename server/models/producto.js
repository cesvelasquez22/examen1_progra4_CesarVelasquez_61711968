const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Definir el esquema para el modelo Producto (Valor 5 puntos)


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    creadoEn:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Producto', usuarioSchema);