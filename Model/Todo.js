const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default:null
    },
    modifiedAt: {
        type: Date,
        default: null
    },
});

module.exports = mongoose.model("Todo",TodoSchema)