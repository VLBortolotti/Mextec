const { ResponseDTO } = require('../dtos/Response')
const sensorData = require('../data/sensorData')

exports.postSensor = async (local, tipo, valor) => {
    try {
        if (!local) {
            return new ResponseDTO('Error', 404, 'Localização do sensor não preenchida')
        }

        if (!tipo) {
            return new ResponseDTO('Error', 404, 'Tipo de sensor não preenchido')
        }

        if (!valor) {
            return new ResponseDTO('Error', 404, 'Valor do sensor não preenchido')
        }

        const response = await sensorData.postSensor(local, tipo, valor)
        return new ResponseDTO('Success', 200, 'ok', response)

    } catch (error) {
        return new ResponseDTO('Error', 500, 'Erro no servidor')
    }

}