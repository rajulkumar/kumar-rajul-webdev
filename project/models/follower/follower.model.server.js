var mongoose=require('mongoose');
var followerSchema=require('./follower.schema.server');

var followerModel=mongoose.model('FollowerModel',followerSchema);

followerModel.createFollower=createFollower;
followerModel.findFollowerById=findFollowerById;
followerModel.findFollowerByUserId=findFollowerByUserId;

module.exports=followerModel;

function createFollower(userId){
    var follower={};
    follower.userId=userId;
    return followerModel.create(follower);
}


function findFollowerById(followerId){
    return followerModel.findById(followerId);
}

function findFollowerByUserId(userId){
    return followerModel.findOne({userId:userId});
}