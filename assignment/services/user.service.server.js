var app=require("../../express");

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
    var passworrd=req.query.password;
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
        res.status(404);
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

function _findUserByCredentials(user){
    for(var idx in users){
        var _user=users[idx];
        if(_user.username===user.username
            && _user.password===user.password)
        {
            return _user;
        }
    }
    return null;
}

function createUser(req,res){
    var user=req.body;
    res.send(createObjet(user,users));
}

function findUserById(req, res){
    var userId=req.params.userId;
    var user=findOjectByObjectId(userId,users);
    if(user){
        res.send(user);
    }
    else{
        res.status(404);
    }
}

function updateUser(req,res){
    var userId=req.params.userId;
    var user=req.body;

    var sts=updateObject(userId,user,users);
    if(!sts){
        res.send(400);
    }
}

function deleteUser(req,res){
    var userId=req.params.userId;

    var sts=deleteObject(userId,users);
    if(!sts){
        res.send(400);
    }
}


