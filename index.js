var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.post('/api/login', userCtrl.login);
app.get('/api/get', profileCtrl.pushProfiles);





var port = 3000;
app.listen(port, function() {
  console.log("listening to port: " + port);
})
