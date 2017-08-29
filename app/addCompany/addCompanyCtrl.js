'use strict';

angular.module('myApp').controller('View3Ctrl',['$scope','dataService',"$http" ,'$location',function(scope,dataService,http,location) {
    dataService.c_id=null;
    scope.obj2={};


    scope.getData=function () {
        dataService.httpData('GET','http://localhost:3000/getCountries')
            .then(function (response) {
                scope.country=response.data.response;
            })
            .catch(function (err) {
                console.log(err);
            })
    };

    scope.getStates=function () {
        console.log(scope.obj2.country)
        dataService.httpData('GET','http://localhost:3000/getStates?country='+scope.obj2.country)
            .then(function (response) {
               scope.states=response.data.response
            })
            .catch(function (err) {
                console.log(err);
            })
    }



    scope.cities=[
        {
            s:"Himachal Pradesh",
            city:"Shimla"
        },
        {
            s:"Alabama",
            city:"New Orleans"
        },
        {
            s:"New South wales",
            city:"Wales"
        }

    ];
    
    scope.imageUpload=function (element) {
        console.log("running")
        var reader=new FileReader();
        reader.readAsDataURL(element.files[0]);
        reader.onload = scope.imageIsLoaded;
    }

    scope.imageIsLoaded=function (e) {
        scope.obj2.img=e.target.result;

    }
    scope.add = function (signup) {
            console.log(scope.obj2);

            dataService.httpData('POST',"http://localhost:3000/addCompany",scope.obj2)
            .then(function (response) {
                alert('You have successfully registered');
                console.log(response);
                scope.obj2 = {};
                location.path('/login');


            })
            .catch(function (err) {
                console.log(err);
                alert(err.data.error);
                scope.obj2 = {};
                scope.company.$setPristine(true);

            });

    }

}]);