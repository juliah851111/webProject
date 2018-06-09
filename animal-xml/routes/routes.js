var faker = require("faker");
var getJSON = require('get-json');
//載入MySQL模組
var mysql = require('mysql');
//建立連線
var connection = mysql.createConnection({
    host: 'mydb.c5pdos5fmaz7.ap-southeast-1.rds.amazonaws.com',
    user: 'root',
    password: '12345678',
    database: 'mydb'
});

//開始連接
connection.connect();

var appRouter = function (app) {
	var result;
	app.get("/", function (req, res) {
		res.status(200).send({ message: 'Welcome to our restful API' });
	});

	app.get("/login/:account/:pwd", function (req, res) {
		var account = req.params.account;
		var pwd = req.params.pwd;


		connection.query('SELECT * FROM user WHERE account = "' + account + '" AND pwd = "' + pwd + '"' ,function(error, rows, fields){
		    //檢查是否有錯誤
		    if(error){
		        throw error;
		    }
		    result = rows;
		    if (result != "") {
		    	res.status(200).send({message: "success"});
		    	console.log(rows); //2
		    }
		    else{
		    	res.status(200).send({message: "failed"});
		    }
		    
		});

		
	});

	app.get("/animals/:num", function (req, res) {
		// var kind = req.params.kind;
		var num = req.params.num;
 		var uri = encodeURI('http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx?$top='+num);

 		getJSON(uri ,function(error, response){
 			if (isFinite(num) && num  > 0 ) {
	   			res.status(200).send(response);

	   		} else {
	   			res.status(400).send({ message: 'invalid number supplied' });
	   		}
   		});
	});

	app.get("/users/:num", function (req, res) {
 		var num = req.params.num;
 		var uri = encodeURI('http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx?$top=10&$filter=animal_kind+like+狗+and+animal_colour+like+灰白色');

 		getJSON(uri ,function(error, response){
 			if (isFinite(num) && num  > 0 ) {
	   			res.status(200).send(response);

	   		} else {
	   			res.status(400).send({ message: 'invalid number supplied' });
	   		}
   		});

	});
}

module.exports = appRouter;