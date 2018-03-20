const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: {type: String, required: [true, 'Note Must Be More Than Three Characters'], minlength: 3},
}, {timestamps:true});
mongoose.model('Note', NoteSchema);