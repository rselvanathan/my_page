var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'typer', 'youtube-embed']);

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
            templateUrl : 'pages/projects.html',
            controller : ProjectsController
        });

    $locationProvider.html5Mode(false);
});