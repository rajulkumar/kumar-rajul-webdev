(function () {
    $(init);

    function init($rootScope){
        var pDiv=$("div");
        for(var f in $rootScope.issueDesc){
            if($rootScope.issueDesc.hasOwnProperty(f)){
                var div=$("div");
                div.append(f+" : "+$rootScope.issueDesc[f]);
                pDiv.append(div);
            }
        }

        $("#renderIssue").append(pDiv);
    }
})();
