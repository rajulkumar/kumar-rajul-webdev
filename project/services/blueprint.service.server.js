var app=require('../../express');

var bpModel=require("../models/blueprint/blueprint.schema.server");
var userModel=require("../models/user/user.model.server");

app.post("/api/projectx/project/create",createProject);
