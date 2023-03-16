const sensorService = require('../services/sensorService')

exports.postSensor = async (req, res, next) => {
    const { metaData, tipo, valor } = req.body
    const local = metaData.local
    console.log(local)

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