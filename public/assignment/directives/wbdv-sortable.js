(function () {
    angular
        .module("myDirectives",[])
        .directive("listSort",listSortDirective);

    function listSortDirective(widgetService,$routeParams){
        var _pageId=$routeParams['pageId'];
        function listSort(scope,element){
            var startIndex=-1;
            var endIndex=-1;
            $(element).sortable({
                start: function (event, ui) {
                    startIndex = $(ui.item).index();
                },
                stop: function (event, ui) {
                    endIndex = $(ui.item).index();
                    console.log([startIndex, endIndex]);
                    widgetService.updateWidgetListIndex(_pageId,startIndex,endIndex)
                        .then(function (response){

                        })
                }
            });
        }
        return {
            //templateUrl: "widget-list.html",
            link: listSort
        }
    }
})();
