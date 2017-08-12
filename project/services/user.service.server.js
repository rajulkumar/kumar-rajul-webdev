var app=require('../../express');

var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/user/login",login);
app.post("/api/projectx/user/create",createUser);
app.get("/api/projectx/user/:userId",findUserById);
app.put("/api/projectx/user/:userId",updateUser);


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


