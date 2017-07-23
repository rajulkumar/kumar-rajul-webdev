(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/login",{
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/user/:userId",{
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
    }
})();
