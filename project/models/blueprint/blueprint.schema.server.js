var mongoose=require('mongoose');

var blueprintSchema = mongoose.Schema({
    title: String,
    description:String,
    project:{type:mongoose.Schema.Types.ObjectId,ref: 'ProjectModel'},
    created: {type: Date | Date.now},
    createdBy:{type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'},
    approved:{type: Date | Date.now},
    approvedBy:{type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'},
    assigned: {type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'},
    state: {type: String, enum: ['NEW', 'APPROVED', 'DISCARDED','CLOSED']},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'CommentsModel'}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'PxUserModel'}]
});

module.exports=blueprintSchema;
