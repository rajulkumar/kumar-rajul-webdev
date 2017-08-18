var mongoose=require('mongoose');

var followerSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'},
    user:[{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'}],
    issue:[{type:mongoose.Schema.Types.ObjectId,ref:'IssueModel'}],
    //blueprint:[{type:mongoose.Schema.Types.ObjectId,ref:'BlueprintModel'}],
    project:[{type:mongoose.Schema.Types.ObjectId,ref:'ProjectModel'}]
},{collection:"follower"});

module.exports=followerSchema;
