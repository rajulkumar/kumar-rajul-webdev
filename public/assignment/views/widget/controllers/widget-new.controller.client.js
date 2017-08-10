(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetNewController",widgetNewController);

    function widgetNewController($location,$routeParams,widgetService){
        var model=this;

        model.widgetList=widgetList;
        model.getWidgetUrl=getWidgetUrl;
        model.createWidget=createWidget;
        model.profile=profile;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];

        model.userId=_userId;
        model.websiteId=_websiteId;
        model.pageId=_pageId;

        function init(){
            model.widgets=[{"widgetType": "HEADING","size": 4, "text": "Lorem ipsum"},
                           { "widgetType": "YOUTUBE", "width": "100%",
                           "url": "https://youtu.be/AM2Ivdi9c4E"},
                           {"widgetType": "IMAGE","width": "100%","url": "http://lorempixel.com/400/200/"},
                           {"widgetType": "HTML", "text": "<p>Lorem ipsum</p>"},
                           {"widgetType":"TEXT","text":"Lorem ipsum","rows":1,"placeholder":"Lorem ipsum",
                           "formatted":false}];
            model.widgetsFound="false";
         }
        init();

        function widgetList(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget");
        }

        function getWidgetUrl(widgetId){
           $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+widgetId);
        }

        function createWidget(widget){
            widgetService.createWidget(_pageId,widget)
                .then(function (widget){
                    $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+widget._id);
                })

        }

        function profile(){
            $location.url("user/"+_userId);
        }
    }
})();
