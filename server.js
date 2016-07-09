var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

var DataController = require('./controllers/DataController');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/data', DataController.serveData);
app.put('/api/list/:listIndex', DataController.addTask);


var portNum = 3000;
app.listen(portNum, function () {
  console.log('Node listening in port: ', portNum);
});
