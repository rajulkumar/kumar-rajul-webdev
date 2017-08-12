(function () {
    angular
        .module("ProjectX")
        .controller("homeController",homeController);

    function homeController($location){
        var model=this;

        model.login=login;

        function init(){

        }
        init();

        function login(){
            $location.url("/login");
        }
    }
})();
