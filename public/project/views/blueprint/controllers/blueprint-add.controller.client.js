(function () {
    angular
        .module("ProjectX")
        .controller("bpAddController",bpAddController);

    function bpAddController($location,$routeParams,$rootScope,bpService){
        var model=this;

        model.createBp=createBp;

        var projectId=$routeParams['projectId'];
        var userId=$rootScope.userId;

        function init(){
            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                    }
                    else {
                        model.user = user;

                    }
                })
        }
        init();

        function createBp(bp){
            bp.project=projectId;
            bp.createBy=userId;
            by.state="NEW";
            bpService.createBp(bp)
                .then(function (bp){
                    $location("");
                })

        }
    }
})()
