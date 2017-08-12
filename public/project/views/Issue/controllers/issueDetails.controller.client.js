(function () {
    angular
        .module("ProjectX")
        .controller("issueDetailsController",issueDetailsController);

        function issueDetailsController($location,$routeParams,$rootScope,issueService){
            var model=this;

            var _issueId=$routeParams["issueId"];
            var _project=$routeParams["project"];

            function init(){
                // issueService.findIssueByIssueId("repos/rajulkumar/"+_project,_issueId)
                //     .then(function (issueDesc){
                //        $rootScope.issueDesc=issueDesc;
                //        model.issueDesc=issueDesc;
                //     })

                var issue=$rootScope.issue;
                issueService.getIssueByUrl(issue)
                    .then(function (issueDesc){
                        return model.issueDesc=issueDesc;
                    });

                if(issue.comments>0){
                    issueService.getCommentsByUrl(issue)
                        .then(function (commentList){
                            return model.commentList=commentList;
                        });
                }
            }
            init();

        }
})();
