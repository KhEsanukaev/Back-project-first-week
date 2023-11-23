const mongoose = require('mongoose')


const bookSchema =  mongoose.Schema({
    author: String,
    name: String,
    categoryId:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categories'
    },
    price: Number,
    description: String,
    content: String,
    image: String,
    data: String,
    numbersOfPages: Number,
    ageRestriction: String,
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book