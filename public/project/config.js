(function() {
    angular
        .module("ProjectX")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:"views/templates/issue-search.view.client.html",
                controller: "issueController",
                controllerAs: "model"
            })
            .when("/project/:project/issue/:issueId",{
                templateUrl:"views/templates/issue-details.view.client.html",
                controller: "issueDetailsController",
                controllerAs: "model"
            })
    }

})();
