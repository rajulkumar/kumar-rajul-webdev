(function () {
    angular
        .module("ProjectX")
        .factory("issueService",issueService);

    function issueService($http){
        return {
            "search":search,
            "findIssueByIssueId":findIssueByIssueId

        };


        function search(issue){
            var query=issue.terms;
            if(issue.project){
                query+="+repo:rajulkumar/"+issue.project;
            }
            if(issue.state){
                    query+= "+state:"+issue.state;
            }
            var url="https://api.github.com/";
            return $http.get(url+"search/issues?q="+query)
                .then(function (response){
                  if(response.status==200){
                      return response.data.items;
                  }
                  else{
                      return response.data;
                  }
                })
        }

        function findIssueByIssueId(repo,issueId){
            var url="https://api.github.com/";
           return $http.get(url+repo+"/issues/"+issueId)
               .then(function (response){
                   if(response.status==200){
                       return response.data;
                   }
               })
        }
    }
})();
