const mongoose = require('mongoose')
const database = require('../infra/database')

const Sensor = mongoose.model('Sensor', {
    local: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    }
})

module.exports = Sensor