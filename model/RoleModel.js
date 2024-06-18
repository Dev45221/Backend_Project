const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },
    created_at: {
        type: String,
        default: Date()
    },
    updated_at: {
        type: String,
        default: Date()
    },
})

const RoleModel = mongoose.model("RoleModel", roleSchema)

module.exports = RoleModel