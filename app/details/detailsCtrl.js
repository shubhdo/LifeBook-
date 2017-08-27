angular.module('myApp').controller('View5Ctrl', ['$scope', 'dataService', function (scope, dataService) {

    dataService.httpData('GET',"http://localhost:3000/getDetails?id="+dataService.emp_id)
        .then(function (response) {
            console.log(response);
            scope.email=response.data[0].email;
            scope.name=response.data[0].name;
            scope.contact=response.data[0].telephone_no;
            scope.country=response.data[0].address.country;
            scope.state=response.data[0].address.state;
            scope.city=response.data[0].address.city;

            console.log(scope.data)
        })
        .catch(function (response) {
            console.log(response)
        })


}]);