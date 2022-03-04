const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 2,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});

module.exports = mongoose.model("User", userSchema);