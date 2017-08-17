var mongoose=require('mongoose');
var bpSchema=require('./project.schema.server');

var bpModel=mongoose.model('BlueprintModel',bpSchema);

bpModel.createBp=createBp;
bpModel.findBpById=findBpById;
bpModel.updateBp=updateBp;
bpModel.findBp=findBp;
bpModel.deleteBp=deleteBp;




