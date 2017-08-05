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
    }

})();
