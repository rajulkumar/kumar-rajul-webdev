(function () {
    angular
        .module("ProjectX")
        .controller("homeController",homeController);

    function homeController($location,$rootScope,userService,issueService){
        var model=this;

        //model.login=login;
        model.search=search;
        model.issueDetails=issueDetails;
        model.userDetails=userDetails;
        model.registerProject=registerProject;

        function init(){
            userService.checkLogin()
                .then (function(user){
                    if(user==0){
                        $rootScope.userId=null;
                        $rootScope.username=null;
                        $rootScope.userType=user.memberType;
                    }
                    else{
                        $rootScope.userId=user._id;
                        $rootScope.username=user.name;
                        $rootScope.userType=user.memberType;

                    }

                    model.userId=$rootScope.userId;
                    model.username=$rootScope.username;
                    model.userType=$rootScope.userType;
                })
        }
        init();

        function login(){
            $location.url("/login");
        }

        function search(domain,searchText){
            var valid=true;
            if(domain==""){
                model.errorMessage="Please provide a domain to search"
                valid=false;
            }

            if(searchText.trim()==""){
                model.errorMessage="Please provide a search text"
                valid=false;
            }

            if(valid){
                if(domain=="User"){
                    userService.findUsers(searchText)
                        .then(function (users){
                            model.users=users;
                        })
                }
                else if(domain=="Issue"){
                    var issue={};
                    issue.project="Docs";  //////////////////// To be removed/////////////////////
                    issue.terms=searchText;
                    issueService.search(issue)
                        .then(function (issueList){
                            model.issueList=issueList;
                        })
                }

            }

        }

        function issueDetails(issue){
            $rootScope.issue=issue;
            $location.url("/issueDetails");
        }

        function userDetails(userId){
            $location.url("/user/"+userId);
        }

        function registerProject(){
            $location.url("/project/register");
        }
    }

})();
