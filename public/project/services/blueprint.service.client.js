(function () {
    angular
        .module("ProjectX")
        .factory("bpService",bpService);

    function bpService($http){
        return {
            "createBp":createBp,
            "appproveBp":approveBp,
            "assignBp":assignBp,
            "updateBp":updateBp
        }

        function createBp(bp){
            return $http.post("",bp)
                .then(function(response){
                   return response.data;
                })
        }

        function approveBp(bp){

        }

        function assignBp(){

        }

        function updateBp(){

        }
    }
})();
