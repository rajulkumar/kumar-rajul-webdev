(function () {
    angular
        .module("ProjectX")
        .controller("profileController",profileController);

    function profileController($window,$rootScope,userService){
        var model=this;

        model.updateProfile=updateProfile;
        model.cancel=cancel;

        function init(){

            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                    }
                    else {
                        model.user = user;
                        var userId=$rootScope.userId;
                        userService.findUserById(userId)
                            .then(function (user){
                                model.user=user;
                            })

                    }
                })

        }
        init();

        function updateProfile(userId,user){
            userService.updateUser(userId,user)
                .then(function (userDoc){
                    $window.history.back();
                })
        }

        function cancel(){
            $window.history.back();
        }
    }
})();
