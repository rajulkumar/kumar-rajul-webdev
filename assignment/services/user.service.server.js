var app=require("../../express");
var util=require("./utility.service.server.js");

var userModel=require("../model/user/user.model.server");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

app.get("/api/user",findUser);
app.post("/api/user",createUser);
app.get("/api/user/:userId",findUserById);
app.put("/api/user/:userId",updateUser);
app.delete("/api/user/:userId",deleteUser);

function findUser(req,res){
    var username=req.query.username;
    var password=req.query.password;
    //console.log(req.query);
    var user;

    if(password){
        userModel.findUserByCredentials(username,password)
            .then(function (userDoc) {
                res.json(userDoc);
            },function (err) {
                res.statusCode(500).send(err);
            });
    }
    else{
       // return _findUserByUsername(username);
        userModel.findUserByUsername(username)
            .then(function(user){
                res.json(user);

            },function(err){
                res.statusCode(500).send(err);

            });
    }

    // if(user){
    //     res.send(user);
    // }
    // else{
    //     res.sendStatus(404);
    // }

}

function _findUserByUsername(username){
    // for(var idx in users){
    //     if(users[idx].username===username){
    //         return users[idx];
    //     }
    // }
    // return null;
    userModel.findUserByUsername(username)
        .then(function(user){
            res.json(user);

        },function(err){
            res.statusCode(500).send(err);

        })
}

// function _findUserByCredentials(username,password){
//     // for(var idx in users){
//     //     var _user=users[idx];
//     //     if(_user.username===username
//     //         && _user.password===password)
//     //     {
//     //         return _user;
//     //     }
//     // }
//     // return null;
//     userModel.findUserByCredentials(username,password)
//         .then(function (userDoc) {
//             return userDoc;
//         },function (err) {
//             return err;
//         })
//
// }

function createUser(req,res){
    var user=req.body;
    //res.send(util.createObject(user,users));
    userModel.createUser(user)
        .then(function (userDoc){
            res.json(userDoc);
        },function(err){
            res.statusCode(500).send(err);
        })
}

function findUserById(req, res){
    var userId=req.params.userId;
    // var user=util.findOjectByObjectId(userId,users);
    // if(user){
    //     res.send(user);
    // }
    // else{
    //     res.sendStatus(404);
    // }
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

    // var sts=util.updateObject(userId,user,users);
    // if(!sts){
    //     res.sendStatus(404);
    // }
    // else{
    //     res.sendStatus(200);
    // }
    userModel.updateUser(userId,user)
        .then(function(status){
            res.json(status);
        },function(err){
            res.statusCode(500).send(err);
        })
}

function deleteUser(req,res){
    var userId=req.params.userId;

    // var sts=util.deleteObject(userId,users);
    // if(!sts){
    //     res.sendStatus(404);
    // }
    // else{
    //     res.sendStatus(200);
    // }
    userModel.deleteUser(userId)
        .then(function(status){
            res.json(status);
        },function(err){
            res.statusCode(500).send(err);
        })
}


