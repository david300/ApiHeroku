var express         = require("express"),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var mongoose = require('mongoose');
mongoose.connect('mongodb://dferreira:dferreira@ds027718.mongolab.com:27718/falta-uno', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

var router = express.Router();

router.get('/', function(req, res) { res.send("Welcome to Falta Uno!"); });

var chatRouter = require("./routes/chats")(router, app, mongoose);
var partidoRouter = require("./routes/partidos")(router, app, mongoose);

app.use('/faltaUno', router);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
};

app.configure(function() {
    app.use(allowCrossDomain);
});

//var models = require('./models/tvshow')(app, mongoose);
var port_number = process.env.PORT || 3000;

app.listen(port_number, function() {
  console.log("Node server running on " + port_number);
});