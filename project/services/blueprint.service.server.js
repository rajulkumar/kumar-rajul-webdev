var app=require('../../express');

var blueprintModel=require("../models/blueprint/blueprint.model.server");
var gitApi=require("./github.service.server");
var projectModel=require("../models/project/project.model.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/bp/create",createBlueprint);
app.get("/api/projectx/bp/:bpId",getBlueprintById);
// app.post("/api/projectx/bp/get/:bpId",getBp);
app.put("/api/projectx/bp/update/:bpId",updateBp);
app.get("/api/projectx/bp/search/:searchText",findBp);
// app.post("/api/projectx/bp/delete/:bpId",deleteBp);
// app.post("/api/projectx/bp/list",listBp);

function findBp(req,res){
    var searchText=req.params.searchText;
    blueprintModel.findBlueprint(searchText)
        .then(function(response){
            res.json(response);
        })
}


function updateBp(req,res){
    var body=req.body;
    var bpId=req.params.bpId;

    blueprintModel.updateBlueprint(bpId,body)
        .then(function(response){
            res.json(response);
        })
}

function createBlueprint(req,res){
    var body=req.body;
    projectModel.findProjectByName(body.project)
        .then(function (project){
            body.project=project._id;
            blueprintModel.createBlueprint(body)
                .then(function (bp){
                    gitApi.createBp(project.name,bp._id,bp.description,"inital commit")
                        .then(function (response){
                            res.json(bp);
                        },function(err){
                            res.send(err);
                        })

                })
        })
}

function getBlueprintById(req,res){
    var bpId=req.params.bpId;

    blueprintModel.getBlueprintById(bpId)
        .then(function(bp){
            res.json(bp);
        })
}
