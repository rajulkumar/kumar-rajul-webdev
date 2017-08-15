(function() {
    angular
        .module("ProjectX")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:"views/Home/home.view.client.html",
                controller: "homeController",
                controllerAs: "model"
            })
            .when("/search",{
                templateUrl:"views/Issue/templates/issue-search.view.client.html",
                controller: "issueController",
                controllerAs: "model"
            })
            //user configs
            .when("/login",{
                templateUrl:"views/User/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register",{
                templateUrl:"views/User/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile",{
                templateUrl:"views/User/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/user/:userId",{
                templateUrl:"views/User/templates/user-details.view.client.html",
                controller: "userDetailController",
                controllerAs: "model"
            })
            //issue configs
            .when("/issueDetails",{
                templateUrl:"views/Issue/templates/issue-details.view.client.html",
                controller: "issueDetailsController",
                controllerAs: "model"
            })
            //project configs
            .when("/project/:project/issue/:issueId",{
                templateUrl:"views/Issue/templates/issue-details.view.client.html",
                controller: "issueDetailsController",
                controllerAs: "model"
            })
            .when("/project/register",{
                templateUrl:"views/project/templates/project-add.view.client.html",
                controller:"projectRegisterController",
                controllerAs: "model"
            })
    }

})();



