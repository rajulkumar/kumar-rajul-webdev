(function () {
    angular
        .module("ProjectX")
        .controller("projectListController",projectListController);

    function projectListController(projectService,userService){
        var model=this;

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
    }


})();
