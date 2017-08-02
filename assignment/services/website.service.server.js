var app = require("../../express");
var util=require("./utility.service.server.js");

var websites = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
];

app.post("/api/user/:userId/website",createWebsite);
app.get("/api/user/:userId/website",findAllWebsitesForUser);
app.get("/api/website/:websiteId",findWebsiteById);
app.put("/api/website/:websiteId",updateWebsite);
app.delete("/api/website/:websiteId",deleteWebsite);

function createWebsite(req, res) {
    var website=req.body;
    website["developerId"]=req.params.userId;
    res.send(util.createObject(website,websites));
}

function findAllWebsitesForUser(req,res) {
    var userId=req.params.userId;
    var webs=[];
    for(var idx in websites){
        if(websites[idx].developerId===userId){
            webs.push(websites[idx]);
        }
    }
    if(webs.length==0){
        res.send("Not found");
    }
    else{
        res.send(webs);
    }
}

function findWebsiteById(req,res) {
    var websiteId=req.params.websiteId;
    var webs=util.findOjectByObjectId(websiteId,websites);
    if(webs){
        res.send(webs);
    }
    else{
        res.send("Not found");
    }
}

function updateWebsite(req,res) {
    var websiteId=req.params.websiteId;
    var website=req.body;
    var upd=util.updateObject(websiteId,website,websites);
    if(upd){
        res.send(upd.toString());
    }
    else{
        res.send("Not found");
    }
}

function deleteWebsite(req,res) {
    var websiteId=req.params.websiteId;
    if(util.deleteObject(websiteId,websites)){
        res.send("Success");
    }
    else{
        res.send("Not found");
    }
}
