(function () {
    angular
        .module("ProjectX")
        .controller("projectListController",projectListController);

    function projectListController(projectService){
        var model=this;

        function init(){
            projectService.listProjects()
                .then(function (projects){
                    model.projects=projects;
                })
        }
        init();
    }


})();
