var mongoose=require('mongoose');
var projectSchema=require('./project.schema.server');

var projectModel=mongoose.model('ProjectModel',projectSchema);

projectModel.createProject=createProject;
projectModel.findProjectById=findProjectById;
projectModel.findProjects=findProjects;
projectModel.findProjectByGitID=findProjectByGitID;


module.exports=projectModel;

function findProjectByGitID(gitId){
    return projectModel.find({gitProjectId:gitId});
}

function createProject(project){
    return projectModel.create(project);
}

function findProjectById(projectId){
    return projectModel.findById(projectId);
}

function findProjects(){
    return projectModel.find()
        .populate('owner','username')
        .exec();
}


