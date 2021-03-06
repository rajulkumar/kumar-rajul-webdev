(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController",widgetListController);

    function widgetListController($scope,$location,$routeParams,$sce,widgetService,pageService){
        var model=this;

        model.pageList=pageList;
        model.chooseWidget=chooseWidget;
        model.profile=profile;
        model.trustUrlResource=trustUrlResource;
        model.editWidget=editWidget;
        model.getWidgetIncludeUrl=getWidgetIncludeUrl;
        model.trustHtmlContent=trustHtmlContent;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];

        $scope.pageId=_pageId;

        model.userId=_userId;
        model.websiteId=_websiteId;
        model.pageId=_pageId;

        function init(){
            // widgetService.findWidgetsByPageId(_pageId)
            //     .then(function(widgets){
            //         if(widgets!="Not found") {
            //             model.widgets = widgets;
            //         }
            //     })
            model.widgets=[];
            pageService.findPageById(_pageId)
                .then(function (page){
                    for(var idx in page.widgets){
                        widgetService.findWidgetById(page.widgets[idx])
                            .then(function(widget){
                                model.widgets.push(widget);
                            })
                    }
                })
        }
        init();

        function getWidgetIncludeUrl(widgetType){
            return "views/widget/templates/widget-" + widgetType.toLowerCase() + ".view.client.html";
        }

        function pageList(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page");
        }

        function chooseWidget(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/new");
        }

        function trustUrlResource(url) {
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length-1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }

        function editWidget(widgetId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+widgetId);
        }

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }

        function profile(){
            $location.url("user/"+_userId);
        }

    }
})();
