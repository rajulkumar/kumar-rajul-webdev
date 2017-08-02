(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController",websiteListController);

    function websiteListController($location,$routeParams,websiteService){
        var model=this;

        model.newWebsite=newWebsite;
        model.editWebsite=editWebsite;
        model.pageList=pageList;
        model.profile=profile;

        var _userId=$routeParams["userId"];
        model.userId=_userId;

        function init(){
            websiteService.findWebsitesByUser(_userId)
                .then(function (websites){
                    if(websites!="Not found") {
                        model.websites = websites;
                    }
                })
        }
        init();

        function newWebsite(){
            $location.url("user/"+_userId+"/website/new");
        }

        function editWebsite(websiteId){
            $location.url("user/"+_userId+"/website/"+websiteId);
        }

        function pageList(websiteId){
            $location.url("user/"+_userId+"/website/"+websiteId+"/page");
        }

        function profile(){
            $location.url("user/"+_userId);
        }

    }
})();
