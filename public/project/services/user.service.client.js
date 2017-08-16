(function () {
    angular
        .module("ProjectX")
        .factory("userService",userService);

    function userService($http){
        return {
            "login":login,
            "logout":logout,
            "checkLogin":checkLogin,
            "createUser":createUser,
            "findUserById":findUserById,
            "updateUser":updateUser,
            "findUsers":findUsers,
            "followUser":followUser,
            "findOwner":findOwner
        };

        function checkLogin(){
            return $http.get("/api/projectx/user/checkLogin")
                .then(function(response){
                    return response.data;
                })
        }

        function logout(){
            return $http.post("/api/projectx/user/logout")
                .then(function (response){
                    return response.statusCode;

                })
        }

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

        function findOwner(username){
            return $http.get("/api/projectx/user/search/"+searchText)
                .then(function(response){
                    var users= response.data;
                    var owners=[];
                    for(var i in users){
                        if(users[i].memberType==="Owner"){
                            owners.push(users[i]);
                        }
                    }
                    return owners;
                })
        }

        function login(user){
           return $http.post("/api/projectx/user/login",{usernme:user.username,password:user.password})
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
