const mongoose = require('mongoose');
const schema = mongoose.Schema

const communitySchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    slug: {
        type: String,
        require: [true, "Name is required"],
        unique: true
    },
    owner: {
        type: schema.Types.ObjectId,
        ref: "UserModel",
        require: [true, "Name is required"]
    },
    members: {
        type: Array,
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

const CommunityModel = mongoose.model("CommunityModel", communitySchema)

module.exports = CommunityModel