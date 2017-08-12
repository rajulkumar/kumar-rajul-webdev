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

        function login(username,passowrd){
            userService.login(username,password)
                .then(function (user){
                    if(user){
                        $rootScope.userId=user._id;
                        $rootScope.username=user.firstName;
                        $window.history.back();
                    }else{
                        model.errorMessage="Invalid credential or user ot found";
                    }
                })
        }

        function register(){
            $location.url("/register");
        }
    }
})();
