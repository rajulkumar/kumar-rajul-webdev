(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetEditController",widgetEditController);

    function widgetEditController($location,$routeParams,widgetService){
        var model=this;

        model.listWidget=listWidget;
        model.deleteWidget=deleteWidget;
        model.updateWidget=updateWidget;
        model.getWidgetEditUrl=getWidgetEditUrl;
        model.profile=profile;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];
        var _widgetId=$routeParams["wgid"];

        model.userId=_userId;
        model.websiteId=_websiteId;
        model.pageId=_pageId;
        model.widgetId=_widgetId;

        function init(){
            model.widget=widgetService.findWidgetById(_widgetId);
            if(model.widget.size!=null)
                model.widget.size = model.widget.size.toString();
        }
        init();

        function listWidget(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget");
        }

        function deleteWidget(){
            widgetService.deleteWidget(_widgetId);
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget");
        }

        function updateWidget(widget){
            widgetService.updateWidget(_widgetId,widget);
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget");
        }

        function getWidgetEditUrl(widgetType) {
            return "views/widget/editors/widget-" + widgetType.toLowerCase() + "-edit.view.client.html";
        }

        function profile(){
            $location.url("user/"+_userId);
        }
    }
})();
