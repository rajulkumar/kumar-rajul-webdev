var mongoose=require('mongoose');
var widgetSchema=require('./widget.schema.server');
var db=require('../models.server');

var pageModel=require('../page/page.model.server');

var widgetModel=mongoose.model('widgetModel',widgetSchema);

widgetModel.createWidget=createWidget;
widgetModel.findAllWidgetsForPage=findAllWidgetsForPage;
widgetModel.findWidgetById=findWidgetById;
widgetModel.updateWidget=updateWidget;
widgetModel.deleteWidget=deleteWidget;
widgetModel.reorderWidget=reorderWidget;

module.exports=widgetModel;

function createWidget(pageId,widget){
    return widgetModel.create(widget);
}

function findAllWidgetsForPage(pageId){
    return widgetModel.find({_page:pageId});
}

function findWidgetById(widgetId){
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId,widget){
    return widgetModel.update({_id:widgetId},{$set:widget});
}

function deleteWidget(widgetId){

}

function reorderWidget(pageId,start,end){
    return pageModel.findById(pageId)
        .then(function (page){
            page.widgets.splice();
            return pageModel.updatePage(pageId,page)
                .then(function(response){
                    return response;
                })
        })
}
