const mongoose = require('mongoose')
const database = require('../infra/database')

const relatorioSchema = mongoose.Schema(
    { 
        tipo_evento: {
            type: String,
            required: true 
        },
        data: {
            type: Date,
            default: Date.now()
        },
        id_sensor: {
            type: [Schema.Types.ObjectId],
            required: true
        },
        id_transportadora: {
            type: [Schema.Types.ObjectId],
            required: true
        }
    }
);

module.exports = mongoose.model('Relatorio', relatorioSchema)