'use strict';

angular.module('myApp').service('dataService',function ($q,$http) {

        var self=this;
        self.dataArray=[];
        self.httpData=function(method,url,data) {
            return $q(function (resolve, reject) {
                $http({
                    method:method,
                    url:url,
                    data:data,
                    headers: {
                        'Content-Type':'application/json'
                    }

                }).then(function successCallback(response) {
                    console.log(response.data);
                    resolve(response.data)
                }, function errorCallback(response) {
                    console.log(response)
                    reject(response.statusText)
                });

            })
        }
    });
