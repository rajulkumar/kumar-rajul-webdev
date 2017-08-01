(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($location,$routeParams,websiteService){
        var model=this;

        model.listWebsite=listWebsite;
        model.updateWebsite=updateWebsite;
        model.newWebsite=newWebsite;
        model.deleteWebsite=deleteWebsite;
        model.profile=profile;
        model.pageList=pageList;
        model.editWebsite=editWebsite;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        model.userId=_userId;
        model.websiteId=_websiteId;

        function init(){
            websiteService.findWebsiteById(_websiteId)
                .then(function(website){
                    model.website=website;
                });
            websiteService.findWebsitesByUser(_userId)
                .then(function(websites){
                    model.websites=websites;
                })
        }
        init();

        function listWebsite(){
            $location.url("user/"+_userId+"/website");
        }

        function updateWebsite(website){
            if(website) {
                websiteService.updateWebsite(_websiteId, website)
                    .then(function (response){
                        $location.url("user/" + _userId + "/website");
                    })
            }
        }

        function newWebsite(){
            $location.url("user/"+_userId+"/website/new");
        }

        function deleteWebsite(){
            websiteService.deleteWebsite(_websiteId)
                .then(function(response){
                    $location.url("user/"+_userId+"/website");
                })
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
