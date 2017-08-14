var mongoose=require('mongoose');

var projectSchema = mongoose.Schema({
    title: String,
    purpose:String,
    description: String,
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'},
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'PxUserModel'}],
    created:{type:Date|Date.now},
    githubUrl:String,
    token:String
},{collection:"project"});

module.exports=projectSchema;
