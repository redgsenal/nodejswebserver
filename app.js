var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var APP_PORT = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(APP_PORT, function () {
  console.log('app started --> listening on port ' + APP_PORT);
});

app.post('/message', function(req, res){
	console.log("post here");
	var param1 = req.body.param1;
	console.log('param1 ' + param1);
	res.send('Got a POST request');
});