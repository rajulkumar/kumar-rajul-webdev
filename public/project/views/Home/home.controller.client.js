(function () {
    angular
        .module("ProjectX")
        .controller("homeController",homeController);

    function homeController($location,$rootScope,userService,issueService,projectService,bpService){
        var model=this;

        //model.login=login;
        model.search=search;
        model.issueDetails=issueDetails;
        model.userDetails=userDetails;
        model.registerProject=registerProject;
        model.populateDrpDwn=populateDrpDwn;
        model.projectDetails=projectDetails;
        model.bpDetails=bpDetails;

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

                    // model.userId=$rootScope.userId;
                    // model.username=$rootScope.username;
                    // model.userType=$rootScope.userType;
                    model.user=user;
                });
                $rootScope.logout=logout;
                model.noResults=null;
        }
        init();

        // function login(){
        //     $location.url("/login");
        // }

        function populateDrpDwn(text){
            model.domain=text;
        }

        function projectDetails(projectName){
            $location.url("/project/"+projectName);
        }


        function logout(){
            // $rootScope.userId=null;
            // $rootScope.username=null;
            userService.logout()
                .then(function(res){
                    console.log($location.pathname);
                    if($location.path()=="/"){
                        init();
                    }

                    $location.url("/");
                })

        }

        function search(domain,searchText){
            model.noResults=null;
            model.projects=null;
            model.blueprints=null;
            model.users=null;
            model.issueList=null;
            var valid=true;
            if(domain==""){
                model.errorMessage="Please provide a domain to search";
                valid=false;
            }

            if(searchText.trim()==""){
                model.errorMessage="Please provide a search text";
                valid=false;
            }

            if(valid){
                if(domain=="User"){
                    userService.findUsers(searchText)
                        .then(function (users){
                            model.users=users;
                            if(!users){
                                model.noResults=true;
                            }
                        })
                }
                else if(domain=="Issue"){
                    var issue={};
                    issue.project="Docs";  //////////////////// To be removed/////////////////////
                    issue.terms=searchText;
                    issueService.search(issue)
                        .then(function (issueList){
                            model.issueList=issueList;
                            if(!issueList){
                                model.noResults=true;
                            }
                        })
                }
                else if(domain=="Project"){
                    projectService.searchProject(searchText)
                        .then(function(projectList){
                            model.projects=projectList.items;
                            if(!projectList.items){
                                model.noResults=true;
                            }
                        })
                }else if(domain=="Blueprint"){
                    bpService.findBp(searchText)
                        .then(function(bpList){
                            model.blueprints=bpList;
                            if(!bpList){
                                model.noResults=true;
                            }
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

        function bpDetails(bp){
            if(model.user._id==bp.createdBy || model.user.memberType=='Developer' || model.user.username=='admin'){
                $location.url("/blueprint/edit/"+bp._id);
            }
            else{
                $location.url("/blueprint/view/"+bp._id);
            }
        }
    }

})();
