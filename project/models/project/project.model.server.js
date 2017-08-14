var mongoose=require('mongoose');
var projectSchema=require('./project.schema.server');

var projectModel=mongoose.model('ProjectModel',projectSchema);

projectModel.createProject=createProject;
projectModel.updateProject=updateProject;


module.exports=projectModel;

function createProject(project){
    return projectModel.create(project);
}

function findProjectById(projectId){
    return projectModel.findById(projectId);
}


