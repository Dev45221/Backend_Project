const mongoose = require('mongoose');
const schema = mongoose.Schema;

const memberSchema = mongoose.Schema({
    community: {
        type: schema.Types.ObjectId,
        ref: "CommunityModel",
    },
    user: {
        type: schema.Types.ObjectId,
        ref: "UserModel",
    },
    role: {
        type: schema.Types.ObjectId,
        ref: "RoleModel",
    },
    created_at: {
        type: String,
        default: Date()
    },
})

const MemberModel = mongoose.model("MemberModel", memberSchema)

module.exports = MemberModel