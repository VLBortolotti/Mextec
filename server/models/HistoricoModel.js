const mongoose = require('mongoose')
const database = require('../infra/database')

const historicoSchema = mongoose.Schema(
    { 
        id_sensor: {
            type: Schema.Types.ObjectId,
            required: true 
        },
        valor_estado_antigo: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            default: Date.now()
        }
    }
);

module.exports = mongoose.model('Historico', historicoSchema)