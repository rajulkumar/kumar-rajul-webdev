(function () {
    angular
        .module("WebAppMaker")
        .factory("userService",userService);

    function userService(){

        var users=[
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api={
            "createUser":createUser,
            "findUserByUserId":findUserByUserId,
            "findUserByUsername":findUserByUsername,
            "findUserByCredentials":findUserByCredentials,
            "updateUser":updateUser,
            "deleteUser":deleteUser
        };

        return api;

        function _generateUserId(){
            return Math.floor(Math.random()*1000);
        }

        function createUser(user){
            var userInfo={};

            userInfo['username']=user.username;
            userInfo['password']=user.password;
            userInfo['firstName']=user.firstName;
            userInfo['lastName']=user.lastName;
            userInfo['email']=user.email;

            userInfo['username']=_generateUserId();

            return users.push(userInfo);
        }

        function findUserByUserId(userId){
            for(var idx in users){
                if(users[idx]._id===userId){
                    return users[idx];
                }
            }
            return null;
        }

        function findUserByUsername(username){
            for(var idx in users){
                if(users[idx].username===username){
                    return users[idx];
                }
            }
            return null;
        }

        function findUserByCredentials(user){
            for(var idx in users){
                var _user=users[idx];
                if(_user.username===user.username
                    && _user.password===user.password)
                {
                    return _user;
                }
            }
            return null;
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
