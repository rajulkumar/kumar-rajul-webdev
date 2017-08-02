(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService",widgetService);

    function widgetService($http) {

        return {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "listWidgeTypes":listWidgetTypes
        };


        function createWidget(pageId, widget) {
            widget["pageId"]=pageId;
            return $http.post("/api/widget/"+pageId+"/widget",widget)
                .then(function(response){
                    return response.data;
                })
        }

        function findWidgetsByPageId(pageId) {
            return $http.get("/api/page/"+pageId+"/widget")
                .then(function (response){
                    return response.data;
                })
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/"+widgetId)
                .then(function(response){
                    return response.data;
                })
        }

        function updateWidget(widgetId, widget) {
            return $http.put("/api/widget/"+widgetId,widget)
                .then(function(response){
                    return response.data;
                })
        }

        function deleteWidget(widgetId) {
            return $http.delete("/api/widget/"+widgetId)
                .then(function(response){
                    return response.data;
                })
        }

    }

})();
