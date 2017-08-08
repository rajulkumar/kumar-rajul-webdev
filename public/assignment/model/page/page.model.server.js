var mongoose=require('mongoose');
var pageSchema=require("./page.schema.server");
var db=require('../models.server');

var websiteModel=require('../website/website.model.server');

var pageModel=mongoose.model('PageModel',pageSchema);

pageModel.createPage=createPage;
pageModel.findAllPagesForWebsite=findAllPagesForWebsite;
pageModel.findPageById=findPageById;
pageModel.updatePage=updatePage;
pageModel.deletepage=deletePage;

module.export=pageModel;

function createPage(websiteId,page){
    return pageModel.create(page);
}

function findAllPagesForWebsite(websiteId){
    return pageModel.find({_website:websiteId});
}

function findPageById(pageId){
    return pageModel.findById(pageId);
}

function updatePage(pageId,page){
    return pageModel.update({_id:pageId},{$set:page});
}

function deletePage(pageId){

}