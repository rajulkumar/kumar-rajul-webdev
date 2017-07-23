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
            "findUserByUsername":findUserByUsername,
            "findUserByCredentials":findUserByCredentials
        };

        return api;

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



    }
})();
