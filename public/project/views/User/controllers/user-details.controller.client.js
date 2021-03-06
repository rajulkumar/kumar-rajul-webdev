(function () {
    angular
        .module("ProjectX")
        .controller("userDetailController",userDetailController);

    function userDetailController($routeParams,$window,$rootScope,userService){
        var model=this;

        model.back=back;
        model.follow=follow;

        var userId=$routeParams['userId'];

        function init(){
            model.following=null;
            userService.findUserById(userId)
                .then(function (user) {
                    model.user = user;

                    userService.checkLogin()
                        .then(function (user) {
                            if (user == 0) {
                                model.following = true;
                            } else {
                                for(var c in model.user.followers) {
                                    if (model.user.followers[c]._id==user._id) {
                                        model.following = true;
                                    }
                                }
                            }
                        })
                })


        }
        init();

        function back(){
            $window.history.back();
        }

        function follow(userId){
            var followerId=$rootScope.userId;
            userService.followUser(userId,followerId)
                .then(function (status){
                    model.following=true;
                })
        }
    }
})();
