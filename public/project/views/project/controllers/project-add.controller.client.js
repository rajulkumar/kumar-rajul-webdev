(function () {
    angular
        .module("ProjectX")
        .controller("projectRegisterController",projectRegisterController);

    function projectRegisterController($location,projectService,userService){
        var model=this;

        model.registerProject=registerProject;
        model.findOwner=findOwner;
        model.selectOwner=selectOwner;

        function init(){

        }
        init();

        function registerProject(){
            projectService.registerProject()
                .then(function (status){
                    $location.url("/")
                })
        }

        function findOwner(username){
            userService.findOwners(username)
                .then(function (users){
                    model.users=users;
                })
        }

        function selectOwner(owner){
            model.owner=owner._id;
            model.ownerName=owner.name;
        }


    }
})();
