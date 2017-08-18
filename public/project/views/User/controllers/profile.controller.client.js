(function () {
    angular
        .module("ProjectX")
        .controller("profileController",profileController);

    function profileController($window,$rootScope,userService,followerService){
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
                        var userId=user._id;
                        userService.findUserById(userId)
                            .then(function (user){
                                model.user=user;
                                followerService.getFollowerByUserId(userId)
                                    .then(function (followerData){
                                        model.followerData=followerData;
                                    })

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
