(function () {
    angular
        .module("ProjectX")
        .controller("loginController",loginController);

    function loginController($location,$window,userService){
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
                        $rootScope.user=user._id;
                        $rootScope.username=user.firstName;
                        $window.back();
                    }else{
                        model.errorMessage="Invalid credential or user ot found";
                    }
                })
        }
    }
})();
