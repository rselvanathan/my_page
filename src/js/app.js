var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'typer']);

app.controller('viewController', ViewController);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : HomeController
        })
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller : HomeController
        })
        .when('/projects', {
            templateUrl : 'pages/projects.html'
        });

    $locationProvider.html5Mode(true);
});