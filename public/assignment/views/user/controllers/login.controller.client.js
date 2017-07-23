(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController",loginController);

    function loginController($location, userService){

        var model=this;

        model.login = login;

        function init(){

        }
        init();

        function login(user){
            if(!user)
            {
                model.errorMessage="Please provide user credentials"
            }
            else {
                var userInfo = userService.findUserByCredentials(user);

                if (userInfo === null) {
                    model.errorMessage = "Invalid credentials";
                }
                else {
                    $location.url("user/" + userInfo._id);
                }
            }
        }

    }
})();
