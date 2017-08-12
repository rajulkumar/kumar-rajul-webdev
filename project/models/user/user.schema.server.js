var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
    email:String,
    githubId:String,
    memberType:{type:String,enum:['Owner','Developer','User']},
    follows:[{type:mongoose.Schema.Types.ObjectId,ref:'FollowModel'}],
    dateCreated:{type:Date,default:Date.now}
},{collection:"user"});

module.exports=userSchema;
