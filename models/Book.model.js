const mongoose = require('mongoose')


const bookSchema =  mongoose.Schema({
    autor: String,
    name: String,
    categoryId:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    price: Number,
    description: String,
    image: String,
    data: String,
    numbersOfPages: Number,
    ageRestriction: String,
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book