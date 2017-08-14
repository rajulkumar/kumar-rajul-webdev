var app=require('../../express');

var userModel=require("../models/user/user.model.server");
var followerModel=require("../models/follower/follower.model.server");

app.post("/api/projectx/user/login",login);
app.post("/api/projectx/user/create",createUser);
app.get("/api/projectx/user/:userId",findUserById);
app.put("/api/projectx/user/:userId",updateUser);
app.get("/api/projectx/user/search/:searchText",findUsers);
app.put("/api/projectx/user/:userId/follow/:followerId",followUser);

function followUser(req,res){
    var userId=req.params.userId;
    var followerId=req.params.followerId;

    userModel.findUserById(userId)
        .then(function(user){
            user.followers.push(followerId);
            user.save()
                .then(function (response){
                    followerModel.findFollowerById(followerId)
                        .then(function (follower){
                            follower.user.push(userId);
                            follower.save()
                                .then(function(status){
                                    res.json(status);
                                })
                        })
                })
        })
}

function findUsers(req,res){
    var searchText=req.params.searchText;
    userModel.findUser(searchText)
        .then(function (users){
            res.json(users)
        },function(err){
            res.statusCode(500).send(err);
        })
}


function login(req,res){
    var user=req.body;
    userModel.findUserByCreds(user.username,user.password)
        .then(function (userDoc){
            return res.json(userDoc);
    },function(err){
            return res.statusCode(500).send(err);
    });
}

function createUser(req,res){
    var user=req.body;
    userModel.createUser(user)
        .then(function (userDoc){
            res.json(userDoc);
        },function(err){
            res.send(err);
        })
}

function findUserById(req, res){
    var userId=req.params.userId;
    userModel.findUserById(userId)
        .then(function (userDoc){
            res.json(userDoc);
        },function(err){
            res.statusCode(500).send(err);
        });
}

function updateUser(req,res){
    var userId=req.params.userId;
    var user=req.body;
    userModel.updateUser(userId,user)
        .then(function(status){
            res.json(status);
        },function(err){
            res.statusCode(500).send(err);
        })
}


