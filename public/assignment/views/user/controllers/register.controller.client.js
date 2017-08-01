(function () {
    angular
        .module("WebAppMaker")
        .controller("registerController",registerController);

    function registerController($location,userService){
        var model=this;

        model.register=register;
        model.cancel=cancel;

        function init(){

        }
        init();

        function register(user){
            if(user.password!==user.verifyPass){
                model.errorMessage="Passwords don't match";
            }
            else
            {
                userService.findUserByUsername(user.username)
                    .then(function (response) {
                        if(!response) {
                            var _userId = userService.createUser(user);
                            $location.url("user/" + _userId);
                        }
                        else{
                            model.errorMessage="User already exist";
                        }
                    })

            }
        }

        function cancel(){
            $location.url("login");
        }
    }
})();
