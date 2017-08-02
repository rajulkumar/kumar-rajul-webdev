(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController",pageListController);

    function pageListController($location,$routeParams,pageService){
        var model=this;

        model.newPage=newPage;
        model.editPage=editPage;
        model.widgetList=widgetList;
        model.profile=profile;
        model.website=website;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        model.userId=_userId;
        model.websiteId=_websiteId;

        function init(){
            pageService.findPageByWebsiteId(_websiteId)
                .then(function(pages){
                    if(pages!="Not found") {
                        model.pages = pages;
                    }
                })
        }
        init();

        function newPage(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/new");
        }

        function editPage(pageId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+pageId);
        }

        function widgetList(pageId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+pageId+"/widget");
        }

        function profile(){
            $location.url("user/"+_userId);
        }

        function website(){
            $location.url("user/"+_userId+"/website");
        }
    }
})();
