var mongoose=require('mongoose');

var followerSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'UserModel'},
    issue:[{type:mongoose.Schema.Types.ObjectId,ref:'IssueModel'}],
    blueprint:[{type:mongoose.Schema.Types.ObjectId,ref:'BlueprintModel'}],
    project:[{type:mongoose.Schema.Types.ObjectId,ref:'ProjectModel'}]
});

module.exports=followerSchema;
