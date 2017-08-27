'use strict';

angular.module('myApp').controller('View3Ctrl',['$scope','dataService',"$http" ,'$location',function(scope,dataService,http,location) {
    dataService.c_id=null;
    scope.obj2={};

    scope.country=[
        {
            id:1,
            country:"India"
        },
        {
            id:2,
            country:"USA"
        },
        {
            id:3,
            country:"Australia"
        }

    ];

    scope.states=[
        {
            c:"India",
            state:"Himachal Pradesh"
        },
        {
            c:"USA",
            state:"Alabama"
        },
        {
            c:"Australia",
            state:"New South Wales"
        }

    ];

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