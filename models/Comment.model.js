const mongoose = require('mongoose')


const commentsSchema = mongoose.Schema({
    text: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'
    }
    
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments