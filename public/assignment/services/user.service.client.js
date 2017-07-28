(function () {
    angular
        .module("WebAppMaker")
        .factory("userService",userService);

    function userService($http){

        return api={
            "createUser":createUser,
            "findUserByUserId":findUserByUserId,
            "findUserByUsername":findUserByUsername,
            "findUserByCredentials":findUserByCredentials,
            "updateUser":updateUser,
            "deleteUser":deleteUser
        };

        function createUser(user){
            return createObjet(user,users);
        }

        function findUserByUserId(userId){
            return findOjectByObjectId(userId,users);
        }

        function findUserByUsername(username){
            return $http.get("/api/user?username="+username)
                .then(function (response){
                    return response.data;
                });
        }

        function findUserByCredentials(user){
            return $http.get("/api/user?username="+username+"password="+password)
                .then(function (response){
                   return response.data;
                });
        }

        function updateUser(userId, user){
            for(var idx in users){
                if(users[idx]._id===userId)
                {
                    users[idx]=user;
                    return 1;
                }
            }
            return null;
        }

        function deleteUser(userId){
            var id;
            for(var idx in users){
                if(users[idx]._id===userId)
                {
                   id=idx;
                   break;

                }
            }
            if(id) {
                return users.splice(id, 1);
            }
            return null;
        }

    }
})();
