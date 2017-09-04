'use strict';

angular.module('myApp').controller('View1Ctrl',['$scope','$location','dataService' ,function(scope,location,dataService) {

   /* dataService.currentData=null;
    scope.img=dataService.img;
*/
    scope.obj={};

    scope.getData=function () {
        dataService.getCountries()
            .then(function (response) {
                scope.country=response.data.response;
            })
            .catch(function (err) {
                console.log(err);
            })
    };

    scope.getStates=function () {
        console.log(scope.obj.country)
        dataService.getStates(scope.obj.country)
            .then(function (response) {
                scope.states=response.data.response
            })
            .catch(function (err) {
                console.log(err);
            })
    };

    scope.imageUpload=function (element) {
        console.log("running")
        var reader=new FileReader();
        reader.readAsDataURL(element.files[0]);
        reader.onload = scope.imageIsLoaded;
    };

    scope.imageIsLoaded=function (e) {
        scope.obj.img=e.target.result;

    };
    scope.logout = function () {
        location.path('/main')
    };


    scope.add = function (signup) {


              dataService.signUp(scope.obj)
                .then(function (data) {
                    console.log(data)
                    alert('You have successfully registered');
                })
                .catch(function (err) {
                    alert(err.message);
                    console.log(err)
                });
            console.log(scope.obj);
            scope.obj = {};
            scope.signup.$setPristine(true);
    };


}]);