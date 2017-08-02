var app = require("../../express");
var util=require("./utility.service.server.js");

var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

app.post("/api/page/:pageId/widget",createWidget);
app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
app.get("/api/widget/:widgetId",findWidgetById);
app.put("/api/widget/:widgetId",updateWidget);
app.delete("/api/widget/:widgetId",deleteWidget);

function createWidget(req,res) {
    var widget=req.body;
    page["pageId"]=req.params.pageId;
    res.send(util.createObjet(widget,widgets));
}

function findAllWidgetsForPage(req,res) {
    var pageId=req.params.pageId;
    var wids=[];
    for(var idx in widgets){
        if(widgets[idx].pageId===pageId){
            wids.push(widgets[idx]);
        }
    }
    if(wids.length==0){
        res.send("Not found");
    }
    else{
        res.send(wids);
    }
}


function findWidgetById(req,res) {
    var widgetId=req.params.widgetId;
    var widget=util.findOjectByObjectId(widgetId,widgets);
    if(widget){
        res.send(widget);
    }
    else{
        res.send("Not found")
    }
}

function updateWidget(req,res) {
    var widgetId=req.params.widgetId;
    var widget=req.body;
    var upd= util.updateObject(widgetId,widget,widgets);
    if(upd){
        res.send(upd);
    }
    else{
        res.send("Not found");
    }
}

function deleteWidget(req,res) {
    var widgetId=req.params.widgetId;
    if(util.deleteObject(widgetId,widgets)){
        res.send("Success");
    }
    else{
        res.send("Not found");
    }
}