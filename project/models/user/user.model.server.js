var mongoose=require('mongoose');
var userSchema=require('./user.schema.server');

var userModel=mongoose.model('PxUserModel',userSchema);

userModel.findUserByCreds=findUserByCreds;
userModel.createUser=createUser;
userModel.findUserById=findUserById;
userModel.findUserByUsername=findUserByUsername;
userModel.updateUser=updateUser;
//userModel.updateProject=updateProject;
//userModel.updateIssue=updateIssue;
//userModel.updateBlueprint=updateBlueprint;
userModel.updateFollower=updateFollower;
userModel.findUser=findUser;

module.exports=userModel;

function findUserByUsername(username){
    return userModel.findOne({username:username});
}

function findUserByCreds(username,password){
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

function updateFollower(userId,followerId){
    return userModel.findById(userId)
        .then(function (user){
            user.followers.push(followerId);
            return user.save();
        })
}

function findUser(searchTerm){
    return userModel.find({$or:[{name:{$in:[new RegExp(searchTerm,"i")]}},
        {username:{$in:[new RegExp(searchTerm,"i")]}},
        {githubId:{$in:[new RegExp(searchTerm,"i")]}}]});

}