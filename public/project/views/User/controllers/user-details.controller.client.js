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
            userService.findUserById(userId)
                .then(function (user){
                    model.user=user;
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
