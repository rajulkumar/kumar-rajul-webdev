(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService",pageService);

    function pageService() {

        var pages = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
        ];

        return {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };


        function createPage(websiteId, page) {
            page["websiteId"]=websiteId;
            return createObjet(page,pages);

        }

        function findPageByWebsiteId(websiteId) {
            var pageLst=[];
            for(var idx in pages){
                if(pages[idx].websiteId===websiteId){
                    pageLst.push(pages[idx]);
                }
            }
            return pageLst;
        }

        function findPageById(pageId) {
            return findOjectByObjectId(pageId,pages);
        }

        function updatePage(pageId, page) {
            return updateObject(pageId,page,pages);
        }

        function deletePage(pageId) {
            return deleteObject(pageId,pages);
        }
    }

})();
