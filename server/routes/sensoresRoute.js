const express = require('express')
const router = express.Router()
const sensoresController = require('../controllers/sensoresController')

router.post('/', sensoresController.postSensor)

router.get('/', sensoresController.getAllSensores)

module.exports = router