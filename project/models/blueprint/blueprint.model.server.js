var mongoose=require('mongoose');
var blueprintSchema=require('./blueprint.schema.server');

var blueprintModel=mongoose.model('BlueprintModel',blueprintSchema);

blueprintModel.createBlueprint=createBlueprint;
blueprintModel.getBlueprintById=getBlueprintById;
blueprintModel.updateBlueprint=updateBlueprint;
blueprintModel.findBlueprint=findBlueprint;
blueprintModel.deleteBlueprint=deleteBlueprint;
blueprintModel.findBlueprintByProjectId=findBlueprintByProjectId;

module.exports=blueprintModel;

function findBlueprintByProjectId(projectId){
    return blueprintModel.find({project:projectId});
}

function createBlueprint(blueprint){
    return blueprintModel.create(blueprint);
}

function getBlueprintById(bpId){
    return blueprintModel.findById(bpId)
        .populate('project','name')
        .populate('createdBy','username')
        .populate('approvedBy','username')
        .exec()
}

function updateBlueprint(bpId,blueprint){
    return blueprintModel.update({_id:bpId},{$set:blueprint});

}

function findBlueprint(searchTerm){
    return blueprintModel.find({$or:[{title:{$in:[new RegExp(searchTerm,"i")]}},
        {description:{$in:[new RegExp(searchTerm,"i")]}}]});

}

function deleteBlueprint(bpId){
    return blueprintModel.remove({_id:bpId});
}
