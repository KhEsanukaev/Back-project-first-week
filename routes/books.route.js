
const { Router } = require('express')
const { booksController } = require('../controllers/book.controller')


const router = Router()

router.get('/books', booksController.getBooks)
router.post('/book', booksController.addBook)
router.delete('/book/:id', booksController.deleteBook)



module.exports = router