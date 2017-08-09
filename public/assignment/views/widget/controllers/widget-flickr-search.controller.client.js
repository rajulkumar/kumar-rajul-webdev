(function () {
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController",FlickrImageSearchController);

    function FlickrImageSearchController($location,$routeParams,flickrService,widgetService){
        var model=this;

        model.editImage=editImage;
        model.searchPhotos=searchPhotos;
        model.profile=profile;
        model.selectPhoto=selectPhoto;

        var _userId=$routeParams["userId"];
        var _websiteId=$routeParams["wid"];
        var _pageId=$routeParams["pid"];
        var _widgetId=$routeParams["wgid"];

        function init(){

        }
        init();

        function editImage(){
            $location.url("/user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+_widgetId);
        }

        function searchPhotos(searchText){
            flickrService
                .searchPhotos(searchText)
                .then(function(response) {
                    var data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });

        }

        function profile(){
            $location.url("user/"+_userId);
        }

        function selectPhoto(photo){
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            widgetService
                .updateImageUrl(_widgetId, url)
                .then(function (reponse){
                    if(reponse=="Success"){
                        $location.url("/user/"+_userId+"/website/"+_websiteId+"/page/"+_pageId+"/widget/"+_widgetId);
                    }
                });
        }


    }
})();
