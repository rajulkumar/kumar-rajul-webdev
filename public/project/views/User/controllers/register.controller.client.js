(function () {
    angular
        .module("ProjectX")
        .controller("registerController",registerController);

    function registerController($location,$window,$rootScope,userService){
        var model=this;

        model.register=register;
        model.cancel=cancel;

        function init(){

        }
        init();

        function register(user) {
            userService.createUser(user)
                .then(function (user){
                    $rootScope.userId=user._id;
                    $rootScope.username=user.firstName;
                    $location.url("/");
                })
        }

        function cancel(){
            $window.history.back();
        }
    }
})();
