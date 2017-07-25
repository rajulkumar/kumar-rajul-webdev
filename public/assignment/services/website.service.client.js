(function(){
    angular
        .module("WebAppMaker")
        .factory("websiteService",websiteService);

    function websiteService() {

        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];

        return {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };


        function createWebsite(userId, website) {
            website["developerId"]=userId;
            return createObjet(website,websites);
        }

        function findWebsitesByUser(userId) {
            var webs=[];
            for(var idx in websites){
                if(websites[idx].developerId===userId){
                    webs.push(websites[idx]);
                }
            }
            return webs;
        }

        function findWebsiteById(websiteId) {
            return findOjectByObjectId(websiteId,websites);
        }

        function updateWebsite(websiteId, website) {
            return updateObject(websiteId,website,websites);
        }

        function deleteWebsite(websiteId) {
            return deleteObject(websiteId,websites);
        }
    }

})();
