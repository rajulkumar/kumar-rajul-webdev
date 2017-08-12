var mongoose=require('mongoose');
var userSchema=require('./user.schema.server');

var userModel=mongoose.model('UserModel',userSchema);

userModel.findUserByCreds=findUserByCreds;
userModel.createUser=createUser;
userModel.findUserById=findUserById;
userModel.updateUser=updateUser;


module.exports=userModel;

function findUserByCreds(username,passoword){
    return userModel.findOne({username:username,password:password});
}

function createUser(user){
    return userModel.create(user);
}

function findUserById(userId){
    return userModel.findById(userId);
}

function updateUser(userId,user){
    return userModel.update({_id:userId},{$set:user});
}