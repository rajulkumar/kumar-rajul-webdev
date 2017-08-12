(function () {
    angular
        .module("ProjectX")
        .controller("homeController",homeController);

    function homeController($location,$rootScope){
        var model=this;

        model.login=login;
        model.profile=profile;
        model.logout=logout;

        function init(){
            model.userId=$rootScope.userId;
            model.username=$rootScope.username;
        }
        init();

        function login(){
            $location.url("/login");
        }

        function profile(){
            $location.url("/profile");
        }

        function logout(){
            $rootScope.userId=null;
            $rootScope.username=null;
            console.log($location.pathname);
            if($location.path()=="/"){
                init();
            }

            $location.url("/");
        }
    }

})();
