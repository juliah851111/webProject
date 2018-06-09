var express = require("express");
var bodyParser = require("body-parser");
// var routes = require("./routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Add headers
// app.use(function (req, res, next) {

// 	// Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7879');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/login', function (req, res) {
  res.render('login');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
