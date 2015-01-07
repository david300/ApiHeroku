var express         = require("express"),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    mongoose        = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var models     = require('./models/chat')(app, mongoose);

/*Controllers*/
var ChatsCtrl = require('./controllers/chats');

/*Routes*/
router.route('/chats')
        .get(ChatsCtrl.findAllChats);


router.get('/', function(req, res) {
  res.send("Hello world!");
});

app.use('/api', router);

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://dferreira:dferreira@ds027718.mongolab.com:27718/falta-uno', function(err, res) {
//    if(err) throw err;
//    console.log('Connected to Database');
//});

//var models = require('./models/tvshow')(app, mongoose);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});