(function () {
    angular
        .module("ProjectX")
        .controller("issueDetailsController",issueDetailsController);

        function issueDetailsController($location,$routeParams,$rootScope,issueService){
            var model=this;

            var _issueId=$routeParams["issueId"];
            var _project=$routeParams["project"];

            function init(){
                issueService.findIssueByIssueId("repos/rajulkumar/"+_project,_issueId)
                    .then(function (issueDesc){
                       $rootScope.issueDesc=issueDesc;
                       model.issueDesc=issueDesc;
                    })
            }
            init();

        }
})();
