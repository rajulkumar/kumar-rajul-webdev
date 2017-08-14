var mongoose=require('mongoose');

var issueSchema = mongoose.Schema({
    issueId: String,
    created: {type: Date | Date.now},
    assigned: {type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'},
    state: {type: String, enum: ['OPEN', 'ASSIGNED', 'CLOSED']},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentsModel'}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'}]
});

module.exports=issueSchema;

