(function () {
    angular
        .module("ProjectX")
        .controller("bpAddController",bpAddController);

    function bpAddController($location,$routeParams,$rootScope,bpService,userService){
        var model=this;

        model.createBp=createBp;

        var projectId=$routeParams['projectId'];
        var userId=$rootScope.userId;

        function init(){
            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                        $location.url("/login");
                    }
                    else {
                        model.user = user;

                    }
                })
        }
        init();

        function createBp(bp){
            //bp.project=projectId;
            bp.createdBy=model.user._id;
            bp.state="NEW";
            bpService.createBp(bp)
                .then(function (bp){
                    $location.url("/blueprint/view/"+bp._id);
                })

        }
    }
})()
