(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when("/login",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "",
                controllerAs: "model"
            })
    }
})();
