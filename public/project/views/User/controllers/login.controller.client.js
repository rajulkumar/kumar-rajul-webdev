(function () {
    angular
        .module("ProjectX")
        .controller("loginController",loginController);

    function loginController($location,$rootScope,$window,userService){
        var model=this;

        model.login=login;
        model.register=register;

        function init(){
            userService.checkLogin()
                .then (function(user){
                    if(user==0){
                        $rootScope.userId=null;
                        $rootScope.username=null;
                    }
                    else{
                        $rootScope.userId=user._id;
                        $rootScope.username=user.name;
                    }
                })


        }
        init();

        function login(username,password){
            userService.login(username,password)
                .then(function (user){
                    if(user){
                        $rootScope.userId=user._id;
                        $rootScope.username=user.name;
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
