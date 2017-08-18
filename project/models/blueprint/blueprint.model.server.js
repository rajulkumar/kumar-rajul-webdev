var mongoose=require('mongoose');
var blueprintSchema=require('./blueprint.schema.server');

var bpModel=mongoose.model('BlueprintModel',blueprintSchema);

// bpModel.createBp=createBp;
// bpModel.findBpById=findBpById;
// bpModel.updateBp=updateBp;
// bpModel.findBp=findBp;
// bpModel.deleteBp=deleteBp;

module.exports=bpModel;




