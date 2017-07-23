(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController",profileController);

    function profileController($location,$routeParams,userService) {
        var model=this;
        var userId=$routeParams["userId"];

        function init(){
            model.user=userService.findUserByUserId(userId);
        }
        init();



    }
})();
