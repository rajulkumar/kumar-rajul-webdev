(function () {
    angular
        .module("WebAppMaker")
        .controller("pageNewController", pageNewController);

    function pageNewController($location,$routeParams,pageService){
        var model=this;

        model.listPage=listPage;
        model.createPage=createPage;
        model.newPage=newPage;
        model.profile=profile;
        model.widgetList=widgetList;
        model.editPage=editPage;
        model.website=website;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        model.userId=_userId;
        model.websiteId=_websiteId;

        function init(){
            model.pages=pageService.findPageByWebsiteId(_websiteId);
        }
        init();

        function listPage(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page");
        }

        function createPage(page){
            if(page) {
                pageService.createPage(_websiteId,page);
                $location.url("user/" + _userId + "/website/"+_websiteId+"/page");
            }
        }

        function editPage(pageId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+pageId);
        }

        function widgetList(pageId){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/"+pageId+"/widget");
        }

        function newPage(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/new");
        }

        function profile(){
            $location.url("user/"+_userId);
        }

        function website(){
            $location.url("user/"+_userId+"/website/"+_websiteId);
        }
    }
})();
