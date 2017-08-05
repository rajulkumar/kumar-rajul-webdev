(function () {
    angular
        .module("testapp",[])
        .directive("listSortd",listSortd);

    function listSortd(){
        function listSort(scope,element){
            console.log(element);
            console.log(scope);
            $(element).sortable({
                start: function (event, ui) {
                    startIndex = $(ui.item).index();
                    console.log(startIndex)},
                stop: function (event, ui) {
                        startIndex = $(ui.item).index();
                        console.log(startIndex);
                }
            });
        }
        return{
            link:listSort
        }
    }
})();
