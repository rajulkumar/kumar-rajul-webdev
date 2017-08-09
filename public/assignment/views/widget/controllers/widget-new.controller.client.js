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
            model.widgets=[{"_id": "-1", "widgetType": "HEADING","size": 4, "text": "Lorem ipsum"},
                           {"_id": "-2", "widgetType": "YOUTUBE", "width": "100%",
                           "url": "https://youtu.be/AM2Ivdi9c4E"},
                           {"_id": "-3", "widgetType": "IMAGE","width": "100%","url": "http://lorempixel.com/400/200/"},
                           {"_id":"-4", "widgetType": "HTML", "text": "<p>Lorem ipsum</p>"},
                           {"_id":"-5","widgetType":"TEXT","text":"Lorem ipsum","rows":"1","placeholder":"Lorem ipsum",
                           "formatted":true}];
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
                .then(function (widgetId){
                    $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+widgetId);
                })

        }

        function profile(){
            $location.url("user/"+_userId);
        }
    }
})();
