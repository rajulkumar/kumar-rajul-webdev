(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService",widgetService);

    function widgetService() {

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

        return {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };


        function createWidget(pageId, widget) {
            widget["pageId"]=pageId;
            return createObjet(widget,widgets);
        }

        function findWidgetsByPageId(pageId) {
            var wids=[];
            for(var idx in widgets){
                if(widgets[idx].pageId===pageId){
                    wids.push(widgets[idex]);
                }
            }

            return wids;
        }

        function findWidgetById(widgetId) {
            return findOjectByObjectId(widgetId,widgets);
        }

        function updateWidget(widgetId, widget) {
            return updateObject(widgetId,widget,widgets);
        }

        function deleteWidget(widgetId) {
            return deleteObject(widgetId,widgets);
        }
    }

})();
