const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const authMiddleware = require('../middleware/auth.middleware')


const router = Router()

router.get("/basket",authMiddleware, basketController.getBasket )
router.patch("/basket/:bookId", authMiddleware,basketController.addBookInBasket)
router.patch("/basketUp/:id", authMiddleware, basketController.deleteBook)


module.exports = router