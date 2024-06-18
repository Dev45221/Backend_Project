const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true
    },
    password: {
        type: Number,
        require: [true, "Password is required"]
    },
    created_at: {
        type: String,
        default: Date()
    },
})

const UserModel = mongoose.model("UserModel", userSchema)

module.exports = UserModel