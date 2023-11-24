const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    login: String,
    password: String,
    avatar: String,
    role: {
        type: String,
        default: "user"
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User