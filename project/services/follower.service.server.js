var app=require('../../express');

var followerModel=require("../models/follower/follower.model.server");

app.get("/api/projectx/follower/:userId",getFollowerByUserId);

function getFollowerByUserId(req,res){
    var userId=req.params.userId;
    followerModel.getFollowerByUserId(userId)
        .then(function(followerDoc){
            res.json(followerDoc);
        },function(err){
            res.statusCode(500).send(err);
        })
}