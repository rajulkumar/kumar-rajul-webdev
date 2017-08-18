(function() {
    angular
        .module("ProjectX")
        .config(configuration);

    function configuration($routeProvider,$httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

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
                controllerAs: "model",
                resolve:{
                    user: checkLogin
                }
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
            .when("/project/list",{
                templateUrl:"views/project/templates/project-list.view.client.html",
                controller:"projectListController",
                controllerAs: "model"
            })
            .when("/project/:projectName",{
                templateUrl:"views/project/templates/project-details.view.client.html",
                controller:"projectDetailsController",
                controllerAs: "model"
            })
            .when("/blueprint/register",{
                templateUrl:"views/blueprint/templates/blueprint-add.view.client.html",
                controller:"bpAddController",
                controllerAs: "model"
            })

    }

    function checkLogin(userService, $q, $location) {
        var deferred = $q.defer();
        userService
            .checkLogin()
            .then(function (user) {
                if(user === '0') {
                    deferred.reject();
                    $location.url("/login");
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

})();



