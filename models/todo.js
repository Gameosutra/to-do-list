var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_data: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Todo',TodoSchema);;