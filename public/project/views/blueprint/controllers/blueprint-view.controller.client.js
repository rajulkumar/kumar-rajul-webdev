(function () {
    angular
        .module("ProjectX")
        .controller("blueprintViewController",blueprintViewController);

    function blueprintViewController($location,$window,$routeParams,blueprintService){
        var model=this;

        model.findBp=findBp;
        model.back=back;

        var bpId=$routeParams['bpId'];

        function init(){
            if(bpId) {
                blueprintService.getBlueprintById(bpId)
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
