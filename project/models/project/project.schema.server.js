var mongoose=require('mongoose');

var projectSchema = mongoose.Schema({
    title: String,
    purpose:String,
    description: String,
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'UserModel'},
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'UserModel'}],
    created:{type:Date|Date.now},
    githubUrl:String,
    token:String
});

module.exports=projectSchema;
