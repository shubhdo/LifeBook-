'use strict';
angular.module('myApp').controller('View3Ctrl', ['$scope', 'dataService', '$location', '$document', function (scope, dataService, location, documents) {


   /* if (dataService.name === null) {
        location.path('/main');
    }*/
    scope.obj = {};


    scope.obj.id = dataService.user_id;
    scope.imageUpload = function (element) {
        console.log("running")
        var reader = new FileReader();
        reader.readAsDataURL(element.files[0]);
        reader.onload = scope.imageIsLoaded;
    };

    scope.imageIsLoaded = function (e) {
        scope.obj.img = e.target.result;

    };

    scope.img = dataService.img;
    scope.desc = dataService.desc;
    scope.name = dataService.name;


    scope.add = function (signup) {


        dataService.addPost(scope.obj)
            .then(function (data) {
                console.log(data);
                alert('Your Status has been updated');
                getData()
            })
            .catch(function (err) {
                alert(err.message);
                console.log(err)
            });
        console.log(scope.obj);
        scope.obj = {};
        scope.status.$setPristine(true);

    };
    scope.addFav = function (post) {

        console.log(documents[0].getElementById(post.status).style.color);
        if (documents[0].getElementById(post.status).style.color) {
            documents[0].getElementById(post.status).style.color = null

            dataService.addFavPosts({id: post._id, fav: false})
                .then(function (response) {
                    alert("Removed from Favorites")

                })
        }
        else {
            documents[0].getElementById(post.status).style.color = '#33cccc';
            dataService.addFavPosts({id: post._id, fav: true})
                .then(function (response) {
                    alert("Added to Favorites")

                })
        }
    };

    scope.logout = function () {
        dataService.name = null;

        location.path('/main');
    }


    scope.showFav = function () {
        scope.showFavInfo = !scope.showFavInfo
        dataService.getFavPosts(dataService.user_id)
            .then(function (response) {
                scope.fav = response.data.response
                console.log(scope.fav);

            })
            .catch(function (response) {
                console.log(err);
            })
    };
    documents.ready(function () {
        getData()
    });

    function getData() {
        dataService.getAllPosts(dataService.user_id)
            .then(function (data) {
                scope.posts = data.data.response;
                console.log(scope.posts);
            })
            .catch(function (err) {
                console.log(err)
            });
    }

}]);