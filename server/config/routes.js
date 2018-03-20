const quotes = require('../controllers/notes.js');

//-------------------Routes-------------------------

module.exports = function(app){

        app.get('/notes/', function(req, res){
            console.log('in routes.js/get')
            quotes.index(req, res);
        })
        app.post('/notes/new/', function(req, res){
            console.log(req.body);
            console.log('in routes.js/post');
            quotes.addNote(req, res);
        })
       
}