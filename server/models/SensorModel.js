const mongoose = require('mongoose')
const database = require('../infra/database')

const sensorSchema = mongoose.Schema(
    { 
        valor_estado: {
            type: String,
            required: true
        }, 
        timestamp: {
            type: Date,
            default: Date.now() 
        },
        metadata: {
            id_transportadora: {
                type: Schema.Types.ObjectId,
                required: true
            },
            latitude: {
                type: String,
                required: true
            },
            longitude: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                required: true
            }
        } 
    }, 
    {
        timeseries: {
          timeField: 'timestamp',
          metaField: 'metadata',
          granularity: 'seconds'
        },
        autoCreate: false,
        expireAfterSeconds: 3600 // uma hora
    }
);

module.exports = mongoose.model('Sensor', sensorSchema)