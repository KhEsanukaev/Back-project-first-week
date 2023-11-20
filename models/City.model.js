const mongoose = require('mongoose')


const citySchema =  mongoose.Schema({
    name: String,
    descrition: String,
    price: Number,
    place: String,

})

const City = mongoose.model('City', citySchema)

module.exports = City