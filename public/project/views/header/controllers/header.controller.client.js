(function () {
    angular
        .module("ProjectX")
        .controller("headerController",headerController);

    function headerController($rootScope,$location,userService){
        var model=this;

        //$rootScope.login=login;
        //model.profile=profile;
        $rootScope.logout=logout;

        function init(){
            userService.checkLogin()
                .then (function(user){
                    if(user==0){
                        $rootScope.userId=null;
                        $rootScope.username=null;
                        $rootScope.userType=user.memberType;
                    }
                    else{
                        $rootScope.userId=user._id;
                        $rootScope.username=user.name;
                        $rootScope.userType=user.memberType;

                    }

                    model.userId=$rootScope.userId;
                    model.username=$rootScope.username;
                    model.userType=$rootScope.userType;
                })

        }
        init();

        function login(){
            $location.url("/login");
        }

        function profile(){
            $location.url("/profile");
        }

        function logout(){
            // $rootScope.userId=null;
            // $rootScope.username=null;
            userService.logout()
                .then(function(res){
                    console.log($location.pathname);
                    // if($location.path()=="/"){
                    //     init();
                    // }

                    $location.url("/");
                })

        }

    }
})();
