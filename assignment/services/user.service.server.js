var app=require("../../express");
var util=require("./utility.service.server.js");

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
        user=_findUserByCredentials(username,password);
    }
    else{
        user=_findUserByUsername(username);
    }

    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }

}

function _findUserByUsername(username){
    for(var idx in users){
        if(users[idx].username===username){
            return users[idx];
        }
    }
    return null;
}

function _findUserByCredentials(username,password){
    for(var idx in users){
        var _user=users[idx];
        if(_user.username===username
            && _user.password===password)
        {
            return _user;
        }
    }
    return null;
}

function createUser(req,res){
    var user=req.body;
    res.send(util.createObject(user,users));
}

function findUserById(req, res){
    var userId=req.params.userId;
    var user=util.findOjectByObjectId(userId,users);
    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }
}

function updateUser(req,res){
    var userId=req.params.userId;
    var user=req.body;

    var sts=util.updateObject(userId,user,users);
    if(!sts){
        res.sendStatus(404);
    }
    else{
        res.sendStatus(200);
    }
}

function deleteUser(req,res){
    var userId=req.params.userId;

    var sts=util.deleteObject(userId,users);
    if(!sts){
        res.sendStatus(404);
    }
    else{
        res.sendStatus(200);
    }
}


