const Sensor = require('../models/SensorModel')

exports.postSensor = async (local, tipo, valor) => {
    const sensor = new Sensor({local, tipo, valor})

    return await sensor.save()
}

exports.getAllSensores = async () => {
    return await Sensor.find({}, '-__v')
}