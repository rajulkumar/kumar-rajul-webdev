var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
    username:String,
    password:String,
    name:String,
    email:String,
    githubId:String,
    memberType:{type:String,enum:['Owner','Developer','User']},
    projects:[{type:mongoose.Schema.Types.ObjectId,ref:'ProjectModel'}],
    issues:[{type:mongoose.Schema.Types.ObjectId,ref:'IssueModel'}],
    bluePrints:[{type:mongoose.Schema.Types.ObjectId,ref:'BlueprintModel'}],
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'}],
    dateCreated:{type:Date,default:Date.now},
    facebook:{
        id:String,
        token:String
    }
},{collection:"user"});

module.exports=userSchema;
