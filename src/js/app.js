var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'typer']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/home', {
            templateUrl : 'pages/home.html'
        });

    $locationProvider.html5Mode(true);
});