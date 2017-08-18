(function () {
    angular
        .module("ProjectX")
        .factory("bpService",bpService);

    function bpService($http){
        return {
            "createBp":createBp,
            "appproveBp":approveBp,
            "assignBp":assignBp,
            "updateBp":updateBp,
            "getBlueprintById":getBlueprintById,
            "findBp":findBp
        };

        function updateBp(bpId,bp){
            return $http.put("/api/projectx/bp/update/"+bpId,bp)
                .then(function(response){
                    return response.data;
                })
        }

        function findBp(searchText){
            return $http.get("/api/projectx/bp/search/"+searchText)
                .then(function(response){
                    return response.data;
                })
        }


        function getBlueprintById(bpId){
            return $http.get("/api/projectx/bp/:bpId")
                .then(function (response){
                    return response.data;
                })
        }

        function createBp(bp){
            return $http.post("/api/projectx/bp/create",bp)
                .then(function(response){
                   return response.data;
                })
        }

        function approveBp(bp){

        }

        function assignBp(){

        }

            }
})();
