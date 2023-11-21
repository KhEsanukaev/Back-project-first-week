
const { Router } = require('express')
const { commentsController } = require('../controllers/comment.controller')



const router = Router()

router.get('/comments', commentsController.getComments)
router.delete('/comments', commentsController.deleteComments)
router.post('/comments', commentsController.addComments)




module.exports = router