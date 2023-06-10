const mongoose = require('mongoose')
const database = require('../infra/database')

const sessaoSchema = mongoose.Schema(
    { 
        id_usuario: {
            type: Schema.Types.ObjectId,
            required: true
        }, 
        token: {
            type: String,
            required: true 
        },
        data_validade: {
            type: Date,
            required: true
        }
    }
);

module.exports = mongoose.model('Sessao', sessaoSchema)