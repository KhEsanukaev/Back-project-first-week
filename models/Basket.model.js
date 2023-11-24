const mongoose = require('mongoose')


const basketSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book",
    }],
    total: {
        type: Number,
        default: 0
    }
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket