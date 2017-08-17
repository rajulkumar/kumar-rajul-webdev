var app=require('../../express');

var bpModel=require("../models/blueprint/blueprint.schema.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/bp/create",createBp);
app.post("/api/projectx/bp/get/:bpId",getBp);
app.post("/api/projectx/bp/update/:bpId",updateBp);
app.post("/api/projectx/bp/delete/:bpId",deleteBp);
app.post("/api/projectx/bp/list",listBp);

function createBp(req,res){
    var body=req.body;

}
