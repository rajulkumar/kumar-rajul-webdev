(function () {
    angular
        .module("ProjectX")
        .factory("userService",userService);

    function userService($http){
        return {
            "login":login,
            "createUser":createUser,
            "findUserById":findUserById,
            "updateUser":updateUser,
            "findUsers":findUsers,
            "followUser":followUser
        };

        function followUser(userId,followerId){
            return $http.put("/api/projectx/user/"+userId+"/follow/"+followerId)
                .then(function(response){
                    return response.data;
                })
        }

        function findUsers(searchText){
            return $http.get("/api/projectx/user/search/"+searchText)
                .then(function(response){
                    return response.data;
                })
        }

        function login(user){
           return $http.post("/api/projectx/user/login",user)
                .then(function(response){
                    return response.data;
                })
        }

        function createUser(user){
            return $http.post("/api/projectx/user/create",user)
                .then(function(response){
                    return response.data;
                })
        }

        function findUserById(userId){
            return $http.get("/api/projectx/user/"+userId)
                .then(function(response){
                    return response.data;
                })
        }

        function updateUser(userId,user){
            return $http.put("/api/projectx/user/"+userId,user)
                .then(function(response){
                    return response.data;
                })
        }
    }
})();
