'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!' +
            '');

        $routeProvider.when('/addCompany', {
            templateUrl: 'addCompany/addCompany.html',
            controller: 'View3Ctrl'
        }).when('/login', {
            templateUrl: 'login/login.html',
            controller: 'View2Ctrl'
        }).when('/addEmployee', {
            templateUrl: 'addEmployee/addEmployee.html',
            controller: 'View1Ctrl'
        }).when('/getEmployees', {
            templateUrl: 'getEmployees/getEmployees.html',
            controller: 'View4Ctrl'
        }).when('/details', {
                templateUrl: 'details/details.html',
                controller: 'View5Ctrl'
            }).otherwise({redirectTo: '/addCompany'});
    }])
