(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetNewController",widgetNewController);

    function widgetNewController($location,$routeParams,widgetService){
        var model=this;

        model.widgetList=widgetList;
        model.getWidgetUrl=getWidgetUrl;
        model.profile=profile;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];

        model.userId=_userId;
        model.websiteId=_websiteId;
        model.pageId=_pageId;

        function init(){
           model.widgets=widgetService.findWidgetsByPageId(_pageId);
        }
        init();

        function widgetList(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget");
        }

        function getWidgetUrl(widgetId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+widgetId);
        }

        function profile(){
            $location.url("user/"+_userId);
        }
    }
})();
