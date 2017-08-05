(function () {
    angular
        .module("myDirectives",[])
        .directive("listSort",listSortDirective);

    function listSortDirective(widgetService){
        function listSortd(scope,element){
            var startIndex=-1;
            var endIndex=-1;
            var _pageId=scope.pageId;
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
            link: listSortd
        }
    }
})();
