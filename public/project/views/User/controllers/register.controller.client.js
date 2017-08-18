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
            if(!user.username || !user.password || !user.verifyPass)
            {
                model.errorMessage="Please provide required details";
            }
            else if(user.password!==user.verifyPass){
                model.errorMessage="Passoword don't match";
            }
            else {
                userService.createUser(user)
                    .then(function (user) {
                        $rootScope.userId = user._id;
                        $rootScope.username = user.firstName;
                        $location.url("/");
                    })
            }
        }

        function cancel(){
            $window.history.back();
        }
    }
})();
