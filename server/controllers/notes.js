const mongoose = require('mongoose'), 
    Note = mongoose.model('Note')

module.exports = {
    index: function(req, res){
        Note.find({}, null, {sort: {createdAt: -1}}, function(err, notes){
            if (err){
                console.log('something went wrong');
                console.log({err: err.errors});
            }
            else{
                res.json({note: notes});
            }
        })
    },
    addNote: function(req, res){
        console.log(req.body.text)
        console.log("POST DATA", req.body);
        const note = new Note({text: req.body.text});
        note.save(function(err){
            if (err){
                console.log('something went wrong');
                res.json({err: err.errors});
            }
            else{
                console.log('succesfully added a note');
                res.json({notes: note});
            }
        })
    },
}