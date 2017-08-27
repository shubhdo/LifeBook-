'use strict';

angular.module('myApp').controller('View3Ctrl',['$scope','dataService',"$http" ,function(scope,dataService,http) {
    scope.obj={};

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
            alert('You have successfully registered');
            scope.company.$setPristine(true);
            /*dataService.httpData('POST','http://localhost:3000/addCompany',scope.obj2);*/
        http({
            method:'POST',
            url:'http://localhost:3000/addCompany',
            data:scope.obj2,
            headers: {
                'Content-Type':'application/json'
            }

        }).success(function (response) {
            console.log(response);
        }).error (function (response) {
            console.log(response)
        });

    }
    scope.obj2 = {};

}]);