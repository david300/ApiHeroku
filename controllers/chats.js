var mongoose = require('mongoose');
var chat  = mongoose.model('Chat');

//GET - Return all tvshows in the DB
exports.findAllChats = function(req, res) {
    
    //res.addHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log("Traeme todos");

    chat.find(function(err, chats) {
        if(!err) {
            res.send(chats);
        } else {
            console.log('ERROR: ' + err);
        }
    });
}