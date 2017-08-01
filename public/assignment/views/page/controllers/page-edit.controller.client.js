(function () {
    angular
        .module("WebAppMaker")
        .controller("pageEditController", pageEditController);

    function pageEditController($location,$routeParams,pageService){
        var model=this;

        model.listPage=listPage;
        model.updatePage=updatePage;
        model.newPage=newPage;
        model.deletePage=deletePage;
        model.profile=profile;
        model.widgetList=widgetList;
        model.editPage=editPage;
        model.website=website;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];
        model.userId=_userId;
        model.websiteId=_websiteId;
        model.pageId=_pageId;

        function init(){
            pageService.findPageById(_pageId)
                .then(function(page){
                    model.page=page;
                })
            pageService.findPageByWebsiteId(_websiteId)
                .then(function(pages){
                    model.pages=pages;
                })
        }
        init();

        function listPage(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page");
        }

        function updatePage(page){
            if(page) {
                pageService.updatePage(_pageId,page)
                    .then(function(response){
                        $location.url("user/" + _userId + "/website/"+_websiteId+"/page");
                    })
            }
        }

        function newPage(){
            $location.url("user/"+_userId+"/website/"+_websiteId+"/page/new");
        }

        function deletePage(){
            pageService.deletePage(_pageId)
                .then(function(response){
                    $location.url("user/"+_userId+"/website/"+_websiteId+"/page");
                })
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
            $location.url("user/"+_userId+"/website/"+_websiteId);
        }
    }
})();
