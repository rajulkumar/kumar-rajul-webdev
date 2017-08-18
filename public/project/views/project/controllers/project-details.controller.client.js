(function () {
    angular
        .module("ProjectX")
        .controller("projectDetailsController",projectDetailsController);

    function projectDetailsController($location,$window,$routeParams,projectService,bpService,userService){
        var model=this;

        var projectName=$routeParams['projectName'];

        model.back=back;

        function init(){
            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                        //$location.url("/login");
                    }
                    else {
                        if(user.username==="admin") {
                            model.user = user;
                        }}});

                    projectService.getProject(projectName)
                        .then(function(project) {
                            model.repo = project;
                            bpService.findByProjectId(model.repo.projectId)
                                .then(function (bpList) {
                                    model.bpList = bpList;
                                })
                        })

        }
        init();

        function back(){
            $window.history.back();
        }
    }
})();
