'use strict';

angular.module('myApp').controller('View4Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {
     dataService.httpData('GET',"http://localhost:3000/getEmployees?id="+dataService.c_id)
         .then(function (response) {
             console.log(response);
             scope.data=response.data;
             console.log(scope.data)
         })
         .catch(function (response) {
             console.log(response)
         });
    
    scope.seeMore=function (emp_id) {
        dataService.emp_id=emp_id;
        console.log(dataService.emp_id);
        location.path('/details');
    }
    
    

}]);