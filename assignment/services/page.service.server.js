var app = require("../../express");
var util=require("./utility.service.server.js");

var pages = [
    {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
];

app.post("/api/website/:websiteId/page",createPage);
app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
app.get("/api/page/:pageId",findPagesById);
app.put("/api/page/:pageId",updatePage);
app.delete("/api/page/:pageId",deletePage);

function createPage(req,res) {
    var page=req.body;
    page["websiteId"]=req.params.websiteId;
    res.send(createObjet(page,pages));

}

function findAllPagesForWebsite(req,res) {
    var websiteId=req.params.websiteId;
    var pageLst=[];
    for(var idx in pages){
        if(pages[idx].websiteId===websiteId){
            pageLst.push(pages[idx]);
        }
    }
    if(pageLst.length==0){
        res.send("Not found");
    }
    else{
        res.send(pageLst);
    }
}

function findPagesById(req,res) {
    var pageId=req.params.pageId;
    var page=findOjectByObjectId(pageId,pages);
    if(page){
        res.send(page);
    }
    else{
        res.send("Not found")
    }
}

function updatePage(req,res) {
    var pageId=req.params.pageId;
    var page=req.body;
    var upd= updateObject(pageId,page,pages);
    if(upd){
        res.send(upd);
    }
    else{
        res.send("Not found");
    }
}

function deletePage(req,res) {
    var pageId=req.params.pageId;
    if(deleteObject(pageId,pages)){
           res.send("Success");
    }
    else{
        res.send("Not found");
    }
}