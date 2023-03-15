const express = require('express')
const router = express.Router()
const sensoresController = require('../controllers/sensoresController')

router.post('/', sensoresController.postSensor)

module.exports = router