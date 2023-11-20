const mongoose = require('mongoose')


const contrySchema = mongoose.Schema({
    name: String,
    cityId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'City'
    }

})

const Contry = mongoose.model('Contry', contrySchema)

module.exports = Contry