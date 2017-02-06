var app = angular.module('myApp', ['ngMaterial', 'ngRoute', 'typer', 'ngAnimate', 'thatisuday.ng-image-gallery']);

app.constant('baseApiUrl', "https://api.romandcharmi.com");

app.service('globalData', GlobalData);

app.controller('viewController', ViewController);

app.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
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

	$mdThemingProvider.theme('whiteTheme')
		.primaryPalette('grey', {
		    'default' : '50'
        });

	$locationProvider.html5Mode(false);
});

/* Filter added to make iFrame resource links work without error (youtube links) */
app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);