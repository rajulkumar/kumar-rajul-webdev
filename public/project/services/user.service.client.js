(function () {
    angular
        .module("ProjectX")
        .factory("userService",userService);

    function userService($http){
        return {
            "login":login,
            "createUser":createUser,
            "findUserById":findUserById,
            "updateUser":updateUser
        };

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
