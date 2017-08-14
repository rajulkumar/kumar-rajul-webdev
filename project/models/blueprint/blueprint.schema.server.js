var mongoose=require('mongoose');

var blueprintSchema = mongoose.Schema({
    title: String,
    description:String,
    created: {type: Date | Date.now},
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    approved:{type: Date | Date.now},
    approvedBy:{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    assigned: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    state: {type: String, enum: ['NEW', 'APPROVED', 'REJECTED','CLOSED']},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentsModel'}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}]
});

module.exports=blueprintSchema;
