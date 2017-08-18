(function () {
    angular
        .module("ProjectX")
        .controller("editBlueprintController",editBlueprintController);

    function editBlueprintController($location,$routeParams,$window,blueprintService,userService) {
        var model=this;

        model.update=update;
        model.approve=approve;

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
                        blueprintService.getBlueprintById(bpId)
                            .then(function (bp) {
                                model.bp = bp;
                            })
                    }
                })
        }
        init();

        function approve(bp){
            bp.project=bp.project._id;
            bp.createdBy=bo.createdBy._id;
            bp.approvedBy=user._id;
            blueprintService.updateBp(bp._id,bp)
                .then(function(response){
                    $location.url("/");
                })
        }

        function update(bp){
            bp.project=bp.project._id;
            bp.createdBy=bp.createdBy._id;
            bp.approvedBy=bp.approvedBy._id;
            blueprintService.updateBp(bp._id,bp)
                .then(function(response){
                    $location.url("/");
                })
        }

        function back(){
            $window.histroy.back();
        }

    }
})();
