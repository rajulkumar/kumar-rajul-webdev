(function () {
    angular
        .module("ProjectX")
        .factory("projectService",projectService);

    function projectService($http){
        return {
            "registerProject":registerProject
        };

        function registerProject(project){
            return $http.post("/api/projectx/project/create",project)
                .then(function(response){
                    return response.data;
                })
        }

    }
})();
