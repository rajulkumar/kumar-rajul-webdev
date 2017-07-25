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
            model.websites=websiteService.findWebsitesByUser(_userId);
        }
        init();

        function newWebsite(userId){
            $location.url("user/"+userId+"/website/new");
        }

        function editWebsite(userId,websiteId){
            $location.url("user/"+userId+"/website/"+websiteId);
        }

        function pageList(userId,websiteId){
            $location.url("user/"+userId+"/website/"+websiteId+"/page");
        }

        function profile(userId){
            $location.url("user/"+userId);
        }

    }
})();
