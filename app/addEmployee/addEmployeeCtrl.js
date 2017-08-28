'use strict';

angular.module('myApp').controller('View1Ctrl',['$scope','$location','dataService' ,function(scope,location,dataService) {
    dataService.currentData=null;

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

            scope.obj.c_id=dataService.c_id;

            dataService.httpData('POST',"http://localhost:3000/addEmployee",scope.obj)
                .then(function (data) {
                    console.log(data)
                })
                .catch(function (err) {
                    console.log(err)
                });
            console.log(scope.obj);
            alert('You have successfully registered');
            scope.obj = {};
            scope.signup.$setPristine(true);
    }

    scope.getList = function () {
    location.path('/getEmployees')
    }



}]);