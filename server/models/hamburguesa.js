const { Schema } = require("mongoose")

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Hamburguesa = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ingredientes: [{
        type: Schema.Types.ObjectId,
        ref: 'ingrediente'
    }],
    descripcion: {
        type: String
    },
    puntuacion: {
        type: Number
    }

});

module.exports = mongoose.model('hamburguesa', Hamburguesa);