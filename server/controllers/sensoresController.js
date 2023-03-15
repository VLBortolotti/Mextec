const sensorService = require('../services/sensorService')

exports.postSensor = async (req, res, next) => {
    const { local, tipo, valor } = req.body
    
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