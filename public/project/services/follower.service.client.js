(function () {
    angular
        .module("ProjectX")
        .factory("followerService",followerService);

    function followerService($http){
        return {
            "getFollowerByUserId":getFollowerByUserId
        };

        function getFollowerByUserId(userId){
            return $http.get("/api/projectx/follower/"+userId)
                .then(function (response){
                    return response.data;
                })
        }
    }
})();
