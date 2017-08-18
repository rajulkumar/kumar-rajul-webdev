(function () {
    angular
        .module("ProjectX")
        .controller("blueprintViewController",blueprintViewController);

    function blueprintViewController($location,$window,$routeParams,bpService){
        var model=this;

        model.back=back;

        var bpId=$routeParams['bpId'];

        function init(){
            if(bpId) {
                bpService.getBlueprintById(bpId)
                    .then(function (bp) {
                        model.bp = bp;
                    })
            }
        }
        init();

        function back(){
            $window.history.back();
        }
    }
})();
