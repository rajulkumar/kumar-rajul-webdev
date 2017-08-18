var app=require('../../express');

var gitApi=require('./github.service.server');

var projectModel=require("../models/project/project.model.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/project/create",createProject);
app.put("/api/projectx/project/:projectId/member/:memberId",addMember);
app.get("/api/projectx/project/list",listProjects);
app.get("/api/projectx/project/search/:searchText",searchProject);
app.get("/api/projectx/project/:projectName",getProject);

app.post("/api/projectx/test",  gitproject);

function gitproject(req,res){
    var body=req.body;
    gitApi.gitCreateProject(body.name,body.description)
        .then(function(response){
            res.json(response);
        })
}

function getProject(req,res){
    var projectName=req.params.projectName;
    gitApi.getProject(projectName)
        .then(function (projectInfo){
            projectModel.findProjectByGitID(projectInfo.id)
                .then(function (localInfo){
                    var project={};
                    project.name=projectInfo.name;
                    project.description=projectInfo.description;
                    project.owner=localInfo.owner;
                    project.created=localInfo.created;
                    project.url=projectInfo.url;
                    project.projectId=localInfo._id;

                    res.json(project);
                })
        })
}

function searchProject(req,res){
    var searchText=req.params.searchText;
    gitApi.searchProject(searchText)
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
            gitApi.createProject(project.name,project.description)
                .then(function (projDoc){
                    project.gitProjectId=projDoc.id;
                    projectModel.createProject(project)
                        .then(function (project) {
                            res.json(project);
                        }, function (err) {
                            res.statusCode(500).send(err);
                        })
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