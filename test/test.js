(function(){
    angular.module("WamApp",[]);

angular.module("WamApp").controller("loginController",func);

function func($scope) {
    $scope.login = login;
    $scope.hello = "hello world";

    function login(user) {
        $scope.messg = verifyUser(user)+" "+ user;
    }

    function verifyUser(user)
    {
        if(user=="lol"){
            return "hello"
        }
        else{
            return "Invalid user"
        }
    }
}

})();

