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
        model.unregister=unregister;


        var userId=$routeParams["userId"];

        function init(){
            userService.findUserByUserId(userId)
                .then(function (user){
                    model.user=user;
                });

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
            userService.updateUser(userId,user)
                .then(function (response){
                if(response){
                    model.updateMessage="Update successful";
                }
                else {
                    model.errorMessage = "Update error";
                }
            });
        }

        function unregister(){
            userService.deleteUser(userId)
                .then(function (response){
                    if(response){
                        model.deleteMessage="User deleted";
                    }
                });
        }

        function profile(userId){
            model.updateMessage=null;
            model.erroeMessage=null;
            $location.url("user/"+userId);

        }


    }
})();
