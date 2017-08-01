(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController",loginController);

    function loginController($location, userService){

        var model=this;

        model.login = login;
        model.register=register;

        function init(){

        }
        init();

        function login(user){

            if(!user)
            {
                model.errorMessage="Please provide user credentials"
            }
            else {
                userService.findUserByCredentials(user)
                    .then(function (userInfo) {
                        if (userInfo === null) {
                            model.errorMessage = "Invalid credentials";
                        }
                        else {
                            $location.url("user/" + userInfo._id);
                        }
                    });
            }
        }

        function register(){
            $location.url("register");
        }

    }
})();
