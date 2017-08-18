var mongoose=require('mongoose');
var blueprintSchema=require('./blueprint.schema.server');

var blueprintModel=mongoose.model('BlueprintModel',blueprintSchema);

blueprintModel.createBlueprint=createBlueprint;
// bpModel.findBpById=findBpById;
// bpModel.updateBp=updateBp;
// bpModel.findBp=findBp;
// bpModel.deleteBp=deleteBp;

module.exports=blueprintModel;

function createBlueprint(blueprint){
    return blueprintModel.create(blueprint);
}




