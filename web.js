var express = require('express')
var app = express.createServer(express.logger());

app.get('/', function(req, res){
    res.send('Hola mundo!');
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('Listen port' + port);
});