var app=require('../../express');

var blueprintModel=require("../models/blueprint/blueprint.model.server");
var gitApi=require("./github.service.server");
var projectModel=require("../models/project/project.model.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/bp/create",createBlueprint);
// app.post("/api/projectx/bp/get/:bpId",getBp);
// app.post("/api/projectx/bp/update/:bpId",updateBp);
// app.post("/api/projectx/bp/delete/:bpId",deleteBp);
// app.post("/api/projectx/bp/list",listBp);

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
