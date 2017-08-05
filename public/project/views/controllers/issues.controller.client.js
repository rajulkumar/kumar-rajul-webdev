(function () {
    angular
        .module("ProjectX")
        .controller("issueController",issueController);

    function issueController($location,$rootScope,issueService){
        var model=this;

        model.search=search;
        model.issueDetails=issueDetails;

        function init(){

        }
        init();

        function search(issue){
            issueService.search(issue)
                .then(function (issueList){
                   model.issueList=issueList;
                });
        }

        function issueDetails(project,issueId){
            $location.url("/project/"+project+"/issue/"+issueId);
        }
    }
})();
