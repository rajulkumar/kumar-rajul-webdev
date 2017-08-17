var app=require('../../express');

var userModel=require("../models/user/user.model.server");
var followerModel=require("../models/follower/follower.model.server");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post("/api/projectx/user/login",passport.authenticate('local'),login);
app.post("/api/projectx/user/logout",logout);
app.get("/api/projectx/user/checkLogin",checkLogin);
app.post("/api/projectx/user/create",createUser);
app.get("/api/projectx/user/:userId",findUserById);
app.put("/api/projectx/user/:userId",updateUser);
app.get("/api/projectx/user/search/:searchText",findUsers);
app.put("/api/projectx/user/:userId/follow/:followerId",followUser);

function localStrategy(username,password,done){
    userModel
        .findUserByCreds(username, password)
        .then(function (user) {
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        }, function (err) {
            if (err) {
                return done(err);
            }
        });
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}

function login(req,res){
    var user=req.user;
    res.json(user);
}

function logout(req, res) {
    req.logOut();
    res.send(200);
}

function checkLogin(req,res){
    res.send(req.isAuthenticated() ? req.user : '0');
}

function followUser(req,res){
    var userId=req.params.userId;
    var followerId=req.params.followerId;

    userModel.findUserById(userId)
        .then(function(user){
            user.followers.push(followerId);
            user.save()
                .then(function (response){
                    //followerModel.findFollowerById(followerId)
                    followerModel.findFollowerByUserId(followerId)
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


// function login(req,res){
//     var user=req.body;
//     userModel.findUserByCreds(user.username,user.password)
//         .then(function (userDoc){
//             return res.json(userDoc);
//     },function(err){
//             return res.statusCode(500).send(err);
//     });
// }

function createUser(req,res){
    var user=req.body;
    userModel.createUser(user)
        .then(function (userDoc){
            var userD=userDoc;
            followerModel.createFollower(userDoc._id)
                .then(function(response){
                    res.json(userD);
                },function(err){
                    res.statusCode(500).send(err);
                })

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


