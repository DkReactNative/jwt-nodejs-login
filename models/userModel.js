const mongoose = require("mongoose");
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: {
            type: String, required: true,
            unique: true
        },
        password: {
            type: String,
            unique: true
        },
        token: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);
module.exports = User;