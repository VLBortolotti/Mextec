const mongoose = require('mongoose')
const database = require('../infra/database')

const sensorSchema = mongoose.Schema(
    { 
        valor: {
            type: String,
            required: true
        }, 
        timestamp: {
            type: Date,
            default: Date.now() 
        },
        metadata: {
            local: {
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
        expireAfterSeconds: 15
    }
);

module.exports = mongoose.model('Sensor', sensorSchema)