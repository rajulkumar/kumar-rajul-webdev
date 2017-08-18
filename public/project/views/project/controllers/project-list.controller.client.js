(function () {
    angular
        .module("ProjectX")
        .controller("projectListController",projectListController);

    function projectListController($location,projectService,userService){
        var model=this;

        model.projectDetails=projectDetails;

        function init(){
            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                    }
                    else {
                        model.user = user;

                        projectService.listProjects()
                            .then(function (projects){
                                model.projects=projects;
                            })

                    }
                })

        }
        init();

        function projectDetails(projectName){
            $location.url("/project/:projectName");
        }
    }


})();
