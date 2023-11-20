const mongoose = require('mongoose')

const peopleSchema = mongoose.Schema({
    count: Number,
})

const People = mongoose.model("People", peopleSchema)

module.exports = People