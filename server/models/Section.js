const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 30
    },
    information: {
        type: Object,
    },
    userId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Section", sectionSchema);