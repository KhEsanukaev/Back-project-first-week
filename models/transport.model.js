const mongoose = require('mongoose')

const transportSchema = mongoose.Schema({
    name: String,
})

const Transport = mongoose.model("Transport", transportSchema)

module.exports = Transport