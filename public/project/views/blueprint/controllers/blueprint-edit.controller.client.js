(function () {
    angular
        .module("ProjectX")
        .controller("editBlueprintController",editBlueprintController);

    function editBlueprintController($location,$routeParams,$window,bpService,userService) {
        var model=this;

        model.update=update;
        model.approve=approve;
        model.back=back;

        var bpId=$routeParams['bpId'];

        function init(){
            userService.checkLogin()
                .then (function(user) {
                    if (user == 0) {
                        model.user = null;
                        $location.url("/login");
                    }
                    else {
                        model.user=user;
                        bpService.getBlueprintById(bpId)
                            .then(function (bp) {
                                model.bp = bp;
                            })
                    }
                })
        }
        init();

        function approve(bp){
            bp.project=bp.project._id;
            bp.createdBy=bp.createdBy._id;
            bp.approvedBy=model.user._id;
            bp.state='APPROVED';
            bpService.updateBp(bp._id,bp)
                .then(function(response){
                    $location.url("/");
                })
        }

        function update(bp){
            bp.project=bp.project._id;
            bp.createdBy=bp.createdBy._id;
            bp.approvedBy=bp.approvedBy._id;
            bpService.updateBp(bp._id,bp)
                .then(function(response){
                    $location.url("/");
                })
        }

        function back(){
            $window.history.back();
        }

    }
})();
