const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    runtime: {
        type: Number
    },
    released: {
        type: Date
    }
}, {
    timestamps: false
});

module.exports = model('Movie', MovieSchema);