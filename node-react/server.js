var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 9999));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/comments', function(req, res) {
	res.end('abc');
});

    app.get('/youbike/:pageSize/:offset', function(req, res){
    var pageSize = req.params.pageSize,
      offset = req.params.offset;
    request('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=ddb80380-f1b3-4f8e-8016-7ed9cba571d5&limit=' + pageSize + '&offset=' + offset, 
        function(err, response, body){
          if(err)
          {
            console.log(err);
          }
          else if(response.statusCode == 200)
          {
            res.end(body);
          }
    })
    });

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
