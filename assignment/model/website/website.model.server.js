var mongoose=require('mongoose');
var websiteSchema=require('./website.schema.server');
var db=require('../models.server');
var userModel=require('../user/user.model.server');

var websiteModel=mongoose.model('WebsiteModel',websiteSchema);

websiteModel.createWebsite=createWebsite;
websiteModel.findAllWebsitesForUser=findAllWebsitesForUser;
websiteModel.findWebsiteById=findWebsiteById;
websiteModel.updateWebsite=updateWebsite;
websiteModel.deleteWebsite=deleteWebsite;

module.exports=websiteModel;

function createWebsite(userId,website){
    var webs;
    return websiteModel.create(website)
        .then(function(website){
            webs=website;
            var user=userModel.findById(userId);
            user.website.push(website._id);
            userModel.updateUser(userId,user);
        })
        .then(function (){
            return webs;
        })
}

function findAllWebsitesForUser(userId){
    return websiteModel.find({_user:userId});
}

function findWebsiteById(websiteId){
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId,website){
    return websiteModel.update({_id:websiteId},{$set:website});
}

function deleteWebsite(websiteId){

}