const sensorService = require('../services/sensorService')

exports.postSensor = async (req, res, next) => {
    const { metadata, valor } = req.body
    const local = metadata.local
    const tipo = metadata.tipo
    console.log(local)
    console.log(tipo)

    const response = await sensorService.postSensor(local, tipo, valor)

    if (response.type == "Success"){
        res.status(response.status).json({
            status: response.status,
            msg: 'ok',
            data: response.data
        })
    } else { 
        res.status(response.status).json({
            status: response.status,
            msg: 'erro',
            erro: response.message
        }) 
    }
}

exports.getAllSensores = async (req, res, next) => {
    const response = await sensorService.getAllSensores()

    if (response.type == "Success"){
        res.status(response.status).json({
            status: response.status,
            msg: 'ok',
            data: response.data
        })
    } else { 
        res.status(response.status).json({
            status: response.status,
            msg: 'erro',
            erro: response.message
        }) 
    }
}

exports.getSensorById = async (req, res, next) => {
    const { id } = req.params

    const response = await sensorService.getSensorById(id)

    if (response.type == "Success"){
        res.status(response.status).json({
            status: response.status,
            msg: 'ok',
            data: response.data
        })
    } else { 
        res.status(response.status).json({
            status: response.status,
            msg: 'erro',
            erro: response.message
        }) 
    }
}