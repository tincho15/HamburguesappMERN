const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Ingrediente = new Schema({
    nombre: {
        type: String
    }
});

module.exports = mongoose.model('ingrediente', Ingrediente);