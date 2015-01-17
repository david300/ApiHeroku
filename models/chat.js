module.exports = function(app, mongoose) {

	var chatSchema = new mongoose.Schema({
        name:       { type: String },
        lastText:   { type: String },
        face:       { type: String }
    });

	mongoose.model('Chat', chatSchema);

};
