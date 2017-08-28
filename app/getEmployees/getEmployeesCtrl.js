'use strict';

angular.module('myApp').controller('View4Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {
     dataService.httpData('GET',"http://localhost:3000/getEmployees?id="+dataService.c_id)
         .then(function (response) {
             console.log(response);
             scope.data=response.data.response[0].data;
             console.log(scope.data.response[0].data)
         })
         .catch(function (response) {
             console.log(response)
         });
    
    scope.seeMore=function (emp_id) {
        dataService.emp_id=emp_id;
        console.log(dataService.emp_id);

        dataService.httpData('GET',"http://localhost:3000/getDetails?id="+dataService.emp_id)
            .then(function (response) {
                console.log(response);
                scope.email=response.data.response[0].email;
                scope.name=response.data.response[0].name;
                scope.contact=response.data.response[0].telephone_no;
                scope.country=response.data.response[0].address.country;
                scope.state=response.data.response[0].address.state;
                scope.city=response.data.response[0].address.city;

            })
            .catch(function (response) {
                console.log(response)
            })
    }
    scope.goBack = function () {
        location.path('/login')
    }
    
    

}]);