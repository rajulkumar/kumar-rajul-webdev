var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
    email:String,
    githubId:String,
    memberType:{type:String,enum:['Owner','Developer','User']},
    projects:[{type:mongoose.Schema.Types.ObjectId,ref:'ProjectModel'}],
    issues:[{type:mongoose.Schema.Types.ObjectId,ref:'IssueModel'}],
    bluePrints:[{type:mongoose.Schema.Types.ObjectId,ref:'BlueprintModel'}],
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'UserModel'}],
    dateCreated:{type:Date,default:Date.now}
},{collection:"user"});

module.exports=userSchema;
