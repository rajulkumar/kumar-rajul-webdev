(function () {
    angular
        .module("ProjectX")
        .factory("projectService",projectService);

    function projectService($http){
        return {
            "registerProject":registerProject,
            "listProjects":listProjects,
            "searchProject":searchProject,
            "getProject":getProject
        };

        function getProject(projectName){
            return $http.get("/api/projectx/project/"+projectName)
                .then(function (response){
                    return response.data;
                })
        }

        function searchProject(searchText){
            return $http.get("/api/projectx/project/search/"+searchText)
                .then(function (response){
                    return response.data;
                })
        }

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
