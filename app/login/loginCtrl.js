'use strict';

angular.module('myApp').controller('View2Ctrl', ['$scope','dataService','$location',function (scope,dataService,location) {
    scope.goback= function () {
        location.path('../')

    }

    /*scope.login =localStorage.setItem('loggedIn',true);
    console.log("111111111",localStorage.getItem('loggedIn'))
*/
    scope.loginForm = function (login) {


        dataService.login(scope.obj3)
            .then(function (response) {
                if (response.status===200) {
                    console.log(response.data.result.profile)
                    dataService.img=response.data.result.profile;
                    dataService.desc=response.data.result.description;
                    dataService.name=response.data.result.name;
                    dataService.user_id=response.data.result._id;
                    console.log(dataService.user_id);

                    console.log("**********",dataService.img);
                    location.path('/dashboard');
                    alert('You have successfully Logged In');
                }
                    else {

                    alert(response.data.error)
                    }
                })
            .catch(function (err) {
                console.log(err)

                alert(err.data.error)

            });
        console.log(scope.obj3);
        scope.obj3 = {};
        scope.login.$setPristine(true);
    }
    }]);