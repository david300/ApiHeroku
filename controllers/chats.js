var mongoose = require('mongoose');
var chat  = mongoose.model('Chat');

//GET - Return all tvshows in the DB
exports.findAllChats = function(req, res) {
    
    //res.addHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log("Traeme todos");

//    var chatsR = 
//    [
//        {
//            "_id":"549c75400192a4cf8fdbbb08",
//            "name":"Ben Sparrow",
//            "lastText":"You on your way?",
//            "face":"https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"
//        },
//        {
//            "_id":"549c75540192a4cf8fdbbb0a",
//            "name":"Andrew Jostlin",
//            "lastText":"Did you get the ice cream?",
//            "face":"https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"
//        },
//        {
//            "_id":"549c755b0192a4cf8fdbbb0b",
//            "name":"Adam Bradleyson",
//            "lastText":"I should buy a boat",
//            "face":"https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"
//        },
//        {
//            "_id":"549c75620192a4cf8fdbbb0c",
//            "name":"Perry Governor",
//            "lastText":"Look at my mukluks!",
//            "face":"https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"
//        }
//    ];
//    res.send(chatsR);
    
    chat.find(function(err, chats) {
        if(!err) {
            res.send(chats);
        } else {
            console.log('ERROR: ' + err);
        }
    });
}