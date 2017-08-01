(function () {
    angular
        .module("WebAppMaker")
        .factory("userService",userService);

    function userService($http){

        return {
            "createUser":createUser,
            "findUserByUserId":findUserByUserId,
            "findUserByUsername":findUserByUsername,
            "findUserByCredentials":findUserByCredentials,
            "updateUser":updateUser,
            "deleteUser":deleteUser
        };

        function createUser(user){
            return $http.post("/api/user/",user)
                .then(function(response){
                    return response.data;
                })
        }

        function findUserByUserId(userId){
            return $http.get("/api/user/"+userId)
                .then(function (response){
                    if(response.status==200){
                        return response.data;
                    }
                 },function(err){
                    return null;
                })
        }

        function findUserByUsername(username){
            return $http.get("/api/user?username="+username)
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                },function(err){
                        return null;
                });
        }

        function findUserByCredentials(user){
            return $http.get("/api/user?username="+user.username+"&password="+user.password)
                .then(function (response){
                    if(response.status==200) {
                        return response.data;
                    }
                },function(err){
                    return null;
                });
        }

        function updateUser(userId, user){
            return $http.put("/api/user/"+userId,user)
                .then(function (response){
                    if(response.status==200){
                        return "Updated";
                    }
                },function(err){
                    return null;
                })
        }

        function deleteUser(userId){
            return $http.delete("/api/user/"+userId)
                .then(function (response){
                    if(response.status==200){
                        return "Deleted "+userId;
                    }
                },function(err){
                    return null;
                })
        }

    }
})();
