var mongoose=require('mongoose');

var issueSchema = mongoose.Schema({
    issueId: String,
    created: {type: Date | Date.now},
    assigned: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    state: {type: String, enum: ['OPEN', 'ASSIGNED', 'CLOSED']},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentsModel'}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}]
});

module.exports=issueSchema;

