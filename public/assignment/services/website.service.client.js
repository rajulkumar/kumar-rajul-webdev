(function(){
    angular
        .module("WebAppMaker")
        .factory("websiteService",websiteService);

    function websiteService($http) {

        return {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };


        function createWebsite(userId, website) {
            website["developerId"]=userId;
            return $http.post("/api/user/"+userId+"/website",website)
                .then(function(response){
                    return response.data;
                })
        }

        function findWebsitesByUser(userId) {
            return $http.get("/api/user/"+userId+"/website")
                .then(function (response){
                    return response.data;
                })
        }

        function findWebsiteById(websiteId) {
            return $http.get("/api/website/"+websiteId)
                .then(function (response){
                    return response.data;
                })
        }

        function updateWebsite(websiteId, website) {
            return $http.put("/api/website/"+websiteId,website)
                .then(function (response){
                    return response.data;
                })
        }

        function deleteWebsite(websiteId) {
            return $http.delete("/api/website/"+websiteId)
                .then(function (response){
                    return response.data;
                })
        }
    }

})();
