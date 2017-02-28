var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require('body-parser')
var APP_PORT = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  console.log('display home page');
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(APP_PORT, function () {
  console.log('app started --> listening on port ' + APP_PORT);
});

app.post('/message', function(req, res){
	console.log("post here");
	var param = req.body.param;
	console.log('param ' + param);	
	if (param){
		var jsonParam = JSON.parse(param);
		console.log(jsonParam);
	}
	res.send("POST /message " + param);
});