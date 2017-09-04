'use strict';

angular.module('myApp').service('dataService', function ($q, $http) {


    var baseUrl='http://localhost:3000/';
    var self = this;
    self.dataArray = [];
    self.user_id = null;
    self.img= null;
    self.desc=null;
    self.name=null;


    self.signUp=function (data) {
       return httpCall('POST',baseUrl+"signup",data);
    };

    self.getCountries=function () {
      return httpCall('GET',baseUrl+"getCountries");
    };

    self.getStates=function (country) {
        return httpCall('GET',baseUrl+"getStates?country="+country);
    };

    self.login=function (data) {
        return httpCall('POST',baseUrl+"login",data);
    }

    self.addPost=function (data) {
        return httpCall('POST',baseUrl+"updateStatus",data);
    }
    self.addFavPosts=function (data) {
        return httpCall('PUT',baseUrl+"addFavPosts",data);

    }

    self.getFavPosts=function (data) {
        return httpCall('GET',baseUrl+"getFavPosts?user_id="+data);
    }

    self.getAllPosts=function (data) {
        return httpCall('GET',baseUrl+"getPosts?user_id="+data);
    }

    function httpCall(method, url, data) {
        return $q(function (resolve, reject) {
            $http({
                method: method,
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {
                console.log(response);
                resolve(response)
            }, function errorCallback(response) {
                console.log(response)
                reject(response)
            });

        })
    }


});
