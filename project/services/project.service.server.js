var app=require('../../express');

var projectModel=require("../models/project/project.model.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/project/create",createProject);
app.put("/api/projectx/project/:projectId/member/:memberId",addMember);


function createProject(req,res) {
    var project = req.body;
    projectModel.createProject(project)
        .then(function (project) {
            res.json(project);
        }, function (err) {
            res.statusCode(500).send(err);
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
