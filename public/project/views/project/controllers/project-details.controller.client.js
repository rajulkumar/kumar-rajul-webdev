(function () {
    angular
        .module("ProjectX")
        .controller("projectDetailsController",projectDetailsController);

    function projectDetailsController($location,$window,$routeParams,projectService,userService){
        var model=this;

        var projectName=$routeParams['projectName'];

        model.back=back;

        function init(){
            // userService.checkLogin()
            //     .then (function(user) {
            //         if (user == 0) {
            //             model.user = null;
            //             $location.url("/login");
            //         }
            //         else {
            //             if(user.username==="admin"){
            //                 model.user = user;
                            projectService.getProject(projectName)
                                .then(function(project){
                                    model.repo=project;
                                })
                //         }
                //         else{
                //             $location.url("/login");
                //         }
                //
                //     }
                // })
        }
        init();

        function back(){
            $window.history.back();
        }
    }
})();
