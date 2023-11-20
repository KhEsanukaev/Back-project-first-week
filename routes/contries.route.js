
const { Router } = require('express')

const { contriesController } = require('../controllers/contry.controller')

const router = Router()

router.get('/categories', contriesController.getContries)
router.post('/categories', contriesController.addContry)




module.exports = router