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

     var limit=3;
         var page=1;
         var pages=0;
         var count=1;
          dataService.httpData('GET',"http://localhost:3000/getPaginatedData/"+dataService.c_id+"/"+limit+"/"+page)
         .then(function (response) {
             console.log(response);
             pages=response.data.response.pages;
             console.log(pages);

             for (var i=0;i<pages;i++) {
                 document.getElementById('paginate').innerHTML+='<li><a onclick="myFunc('+count+')" id="'+count+'">'+count+'</a></li>';
                 count++;
             }

         })
         .catch(function (response) {
             console.log(response)
         });


   /* scope.loadMore=function () {
        dataService.httpData('GET',"http://localhost:3000/getPaginatedData?id="+dataService.c_id+"&&limit="+5+"&&skip="0)
            .then(function (response) {
                console.log(response);
                scope.data=response.data.response[0].data;
                console.log(scope.data.response[0].data)
            })
            .catch(function (response) {
                console.log(response)
            });
    };
*/

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