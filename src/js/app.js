var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'typer', 'ngAnimate', 'thatisuday.ng-image-gallery']);

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

/* Filter added to make iFrame resource links work without error (youtube links) */
app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);