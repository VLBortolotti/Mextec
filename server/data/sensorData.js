const Sensor = require('../models/SensorModel')

exports.postSensor = async (local, tipo, valor) => {
    const sensor = new Sensor() // {local, tipo, valor}
    sensor.metaData['local'] = local
    sensor.tipo = tipo
    sensor.valor = valor

    return await sensor.save()
}

exports.getAllSensores = async () => {
    return await Sensor.find({}, '-__v')
}

exports.getSensorById = async (id) => {
    return await Sensor.findOne({ _id: id }, '-__v')
}