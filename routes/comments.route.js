
const { Router } = require('express')
const { commentsController } = require('../controllers/comment.controller')
const authMiddleware = require('../middleware/auth.middleware')



const router = Router()

router.get('/comments/:id', commentsController.getComments)
router.delete('/comments',authMiddleware, commentsController.deleteComments)
router.post('/comments', authMiddleware, commentsController.addComments)




module.exports = router