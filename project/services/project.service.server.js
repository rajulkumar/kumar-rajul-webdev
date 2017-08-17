var app=require('../../express');

var gitApi=require('./github.service.server');

var projectModel=require("../models/project/project.model.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/project/create",createProject);
app.put("/api/projectx/project/:projectId/member/:memberId",addMember);
app.get("/api/projectx/project/list",listProjects);

app.post("/api/projectx/test",  gitproject);

function gitproject(req,res){
    var body=req.body;
    gitApi.gitCreateProject(body.name,body.description)
        .then(function(response){
            res.json(response);
        })
}


function createProject(req,res) {
    var project = req.body;
    var owner=project.owner;
    userModel.findUserByUsername(owner)
        .then(function (user){
            project.owner=user._id;
            projectModel.createProject(project)
                .then(function (project) {
                    res.json(project);
                }, function (err) {
                    res.statusCode(500).send(err);
                })
        })
}

function addMember(req,res){
    var projectId=req.params.projectId;
    var userId=req.params.memberId;

    projectModel.findProjectById(projectId)
        .then(function(project){
            project.members.push(userId);
            project.save()
                .then(function(project){
                    res.json(project);
                },function(err){
                    res.statusCode(500).send(err);
                })
        })
}


function listProjects(req,res){
    projectModel.findProjects()
        .then(function(projects){
            res.json(projects);
        },function(err){
            res.statusCode(500).send(err);
        })
}