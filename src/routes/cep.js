const express = require('express')
const router = express.Router()

const cepController = require('../controllers/cepController')

router.post('/', cepController.getCep)

module.exports = router