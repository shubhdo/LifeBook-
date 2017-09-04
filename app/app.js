'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!' +
            '');

        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'View2Ctrl'
        }).when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'View1Ctrl'
        }).when('/main', {
            templateUrl: 'main/main.html',
            controller: 'View5Ctrl'
        }).when('/dashboard', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'View3Ctrl'
        }).otherwise({redirectTo: '/main'});


    }])
