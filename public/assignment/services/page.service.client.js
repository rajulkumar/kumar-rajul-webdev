(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService",pageService);

    function pageService() {

        return {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };


        function createPage(websiteId, page) {
            page["websiteId"]=websiteId;
            return $http.post("/api/website/"+websiteId+"/page",website)
                .then(function (response){
                    return response.data;
                })
         }

        function findPageByWebsiteId(websiteId) {
            return $http.get("/api/website/"+websiteId+"/page")
                .then(function (response){
                    return response.data;
                })
        }

        function findPageById(pageId) {
            return $http.get("/api/page/"+pageId)
                .then(function(response){
                    return response.data;
                })
        }

        function updatePage(pageId, page) {
            return $http.put("/api/page/"+pageId,page)
                .then(function(response){
                    return response.data;
                })
        }

        function deletePage(pageId) {
            return $http.delete("/api/page/"+pageId)
                .then(function(response){
                    return response.data;
                })
        }
    }

})();
