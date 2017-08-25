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
        }).when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'View1Ctrl'
        })
            .otherwise({redirectTo: '/signup'});
    }])
