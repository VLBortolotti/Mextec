const mongoose = require('mongoose')
const database = require('../infra/database')

const sensorSchema = mongoose.Schema(
    {
        tipo: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true
        },
        data: {
            type: Date,
            required: true,
            default: Date.now()
        },
        metaData: {
            local: {
                type: String,
                required: true
            }
        }  
    },
    {
        timeseries: {
            timeField: "date", 
            metaField: "metaData",
            granularity: "minutes"
        },
        expireAfterSeconds: 10
    }
)

module.exports = mongoose.model('Sensor', sensorSchema)