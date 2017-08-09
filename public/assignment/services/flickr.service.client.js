(function () {
    angular
        .module("WebAppMaker")
        .factory("flickrService",flickrService);

    function flickrService($http) {

        return {
            "searchPhotos":searchPhotos
        };

        function searchPhotos(searchText){
            var API_KEY="db65486337d4adae1383ca61ded41873";
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search" +
                        "&format=json&api_key="+API_KEY+"&text="+searchText;
            return $http.get(url);
        }
    }
})();
