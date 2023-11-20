
const { Router } = require('express')
const { citiesController } = require('../controllers/city.controller')


const router = Router()

router.get('/cities', citiesController.getCities)
router.post('/cities', citiesController.addCity)




module.exports = router