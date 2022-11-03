const { default: mongoose } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        type: String
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        required: Date.now
    },
});

module.exports = mongoose.model('note', NoteSchema);