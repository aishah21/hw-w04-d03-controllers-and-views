var express = require('express');
var mustache = require('mustache-express');
var app = express();

var port =   3000 ;

var angryBirdsController = require('./controllers/angry_birds_controller');
app.use('/angry_birds', angryBirdsController);

app.engine('html' , mustache());
app.set('view engine' , 'html');
app.set('views' , __dirname + '/views');

app.get('/', function(request, response){
    response.send('this is a  homepage ')
  })

  app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })