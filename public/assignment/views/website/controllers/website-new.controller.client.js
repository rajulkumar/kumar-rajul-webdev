(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteNewController", websiteNewController);

    function websiteNewController($location,$routeParams,websiteService){
        var model=this;

        model.listWebsite=listWebsite;
        model.createWebsite=createWebsite;
        model.newWebsite=newWebsite;
        model.profile=profile;
        model.pageList=pageList;
        model.editWebsite=editWebsite;

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

        function listWebsite(){
            $location.url("user/"+_userId+"/website");
        }

        function createWebsite(website){
            if(website) {
                websiteService.createWebsite(_userId, website)
                    .then(function (response){
                        $location.url("user/" + _userId + "/website");
                    })
            }
        }

        function editWebsite(websiteId){
            $location.url("user/"+_userId+"/website/"+websiteId);
        }

        function pageList(websiteId){
            $location.url("user/"+_userId+"/website/"+websiteId+"/page");
        }

        function newWebsite(){
            $location.url("user/"+_userId+"/website/new");
        }

        function profile(){
            $location.url("user/"+_userId);
        }
    }
})();
