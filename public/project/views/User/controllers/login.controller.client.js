(function () {
    angular
        .module("ProjectX")
        .controller("loginController",loginController);

    function loginController($location,$rootScope,$window,userService){
        var model=this;

        model.login=login;
        model.register=register;

        function init(){


        }
        init();

        function login(user){
            if(!user){
                model.errorMessage="Please provide user credentials"
            }
            else if(!user.username || !user.password)
            {
                model.errorMessage="Please provide user credentials"
            }
            else {
                userService.login(user)
                    .then(function (user) {
                        if (user.data != "Unauthorized") {
                            $rootScope.userId = user._id;
                            $rootScope.username = user.name;
                            $window.history.back();
                        } else {
                            model.errorMessage = "Invalid credential or user ot found";
                        }
                    })
            }

        }

        function register(){
            $location.url("/register");
        }
    }
})();
