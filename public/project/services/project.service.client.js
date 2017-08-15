(function () {
    angular
        .module("ProjectX")
        .factory("projectService",projectService);

    function projectService($http){
        return {
            "registerProject":registerProject,
            "listProjects":listProjects
        };

        function registerProject(project){
            return $http.post("/api/projectx/project/create",project)
                .then(function(response){
                    return response.data;
                })
        }

        function listProjects(){
            return $http.get("/api/projectx/project/list")
                .then(function(response){
                    return response.data;
                })
        }
    }
})();
