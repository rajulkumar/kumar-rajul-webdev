(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController",profileController);

    function profileController($location,$routeParams,userService) {
        var model=this;

        model.website=website
        model.logout=logout
        model.ok=profileOk
        model.profile=profile


        var userId=$routeParams["userId"];

        function init(){
            model.user=userService.findUserByUserId(userId);
        }
        init();

        function website(userId) {
            if(!userId)
            {
                return null;
            }
            $location.url("user/"+userId+"/website");
        }

        function logout(){
            $location.url("login");
        }

        function profileOk(userId,user){
            if(userService.updateUser(userId,user)){
                model.updateMessage="Update successful";
            }
            else
            {
                model.errorMessage="Update error";
            }
        }

        function profile(userId){
            $location.url("user/"+userId);

        }


    }
})();
