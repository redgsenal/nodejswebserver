var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require('body-parser')
var APP_PORT = 3000;
var dtNow = new Date();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

log("Server started on port " + APP_PORT);

app.get('/', function (req, res) {
  log('display home page');
  //res.sendFile(path.join(__dirname+'/index.html'));
  res.render('pages/index');
});

app.get('/about', function (req, res) {
  //res.sendFile(path.join(__dirname+'/remote.html'));
  res.render('pages/about');
});

app.get('/remote', function (req, res) {
  //res.sendFile(path.join(__dirname+'/remote.html'));
  res.render('pages/remote');
});

app.listen(APP_PORT, function () {
  console.log('app started --> listening on port ', APP_PORT);
});

/** recieves messages or commands */
app.post('/message', function(req, res){
	log("post here");
	var param = req.body.param;
	log('param ' + param);	
	if (param){
		try{
			var jsonParam = JSON.parse(param);
			log(jsonParam);
		}catch(err){
			log("error " + err);
		}
	}
	res.send("POST /message " + param);
});

function log(msg){
	console.log("%s: %s", dtNow.toLocaleString(), msg);
}