angular.module('myApp').controller('View5Ctrl', ['$scope','$location',function (scope,location) {

scope.addCompany=function () {
    location.path('/signup')
}

scope.login= function () {
    location.path('/login')

}

}])