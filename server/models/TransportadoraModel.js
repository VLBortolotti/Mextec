const mongoose = require('mongoose')
const database = require('../infra/database')

const transportadoraSchema = mongoose.Schema(
    { 
        nome: {
            type: String,
            required: true
        }, 
        endereco: {
            type: String,
            required: true 
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        id_usuario: {
            type: Schema.Types.ObjectId,
            required: true
        }
    }
);

module.exports = mongoose.model('Transportadora', transportadoraSchema)