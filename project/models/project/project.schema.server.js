var mongoose=require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    purpose:String,
    description: String,
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'},
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'}],
    gitProjectId:String,
    created:{type:Date|Date.now},
    githubUrl:String,
    token:String
},{collection:"project"});

module.exports=projectSchema;
