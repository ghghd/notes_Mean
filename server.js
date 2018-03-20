//--------import modules---------------

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));

//---------------DB-----------------

require('./server/config/mongoose.js');

//----------------Views/Routes------------------
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    console.log('in all server.js')
    res.sendFile(path.resolve("./public/dist/index.html"))
  });

require('./server/config/routes.js')(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})