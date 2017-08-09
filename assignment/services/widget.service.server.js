var app = require("../../express");
var util=require("./utility.service.server.js");
var multer  = require('multer');
var upload = multer({ dest: __dirname+'/../../public/uploads' });

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
app.put("/api/page/:pageId/widget",updateWidgetListIndex);
app.post("/api/upload",upload.single('myFile'),uploadImage);

function uploadImage(req, res) {

    var widgetId= req.body.widgetId;
    var width=req.body.width;
    var myFile=req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var filename= myFile.filename;

    //widget = findWidgetById(widgetId);
    widget=util.findOjectByObjectId(widgetId,widgets);

    function findWidgetById(widgetId) {
        for(var u in widgets) {
            if (widgets[u]._id === widgetId) {
                return widgets[u];
            }
        }
        return null;
    }

    widget.url = '/uploads/'+filename;
    widget.width = width;

    var callbackUrl   = "/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";

    res.redirect(callbackUrl);
}

function createWidget(req,res) {
    var widget=req.body;
    widget["pageId"]=req.params.pageId;
    res.send(util.createObject(widget,widgets));
}

function _findWidgetsByPage(pageId){
    var wids=[];
    for(var idx in widgets){
        var widget=widgets[idx];
        if(widget.pageId===pageId){
            widget['pIndex']=idx;
            wids.push(widget);
        }
    }
    return wids;
}

function findAllWidgetsForPage(req,res) {
    var pageId=req.params.pageId;
    var wids=_findWidgetsByPage(pageId);

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
        res.send(upd.toString());
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

function updateWidgetListIndex(req,res){
    var initial=req.query.initial;
    var final=req.query.final;
    var pageId=req.params.pageId;

    var index=widgets.indexOf(pageId);
    //widgets.splice(index,)

    // var wids=_findWidgetsByPage(pageId);
    //
    // var pInitial=wids[initial]['pIndex'];
    // var pFinal=wids[final]['pIndex'];
    //
    // function _mveTopDown(l,i,j){
    //     var tmp=l[j];
    //     for(var c=j;c>i;c--){
    //         l[c]=l[c-1]
    //     }
    //     l[i]=tmp;
    // }
    //
    // function _mveBotUp(l,i,j){
    //     var tmp=l[i];
    //     for(var c=i;c>j;c--){
    //         l[c]=l[c-1]
    //     }
    //     l[j]=tmp;
    // }
    //
    // if(wids.length!=0) {
    //     if (pInitial < pFinal) {
    //         _mveTopDown(widgets, pInitial, pFinal);
    //     }
    //     else if(initial>final){
    //         _mveBotUp(widgets, pInitial, pFinal);
    //     }
    // }
}