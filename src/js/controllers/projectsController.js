var ProjectsController = function ($scope, $mdDialog, $window, $http) {
	// Init the Projects
	$http.get('../resources/projects.json')
		.success(function (projects) {
			$scope.projects = projects;
		})
		.error(function (data) {
			console.log("Error getting file");
		});

	$scope.hasGitHub = function (projectJson) {
		return isItemInArray(buttonTypes.GITHUB, projectJson.buttonTypes);
	};

	$scope.hasVideo = function (projectJson) {
		return isItemInArray(buttonTypes.VIDEO, projectJson.buttonTypes);
	};

	$scope.hasGallery = function (projectJson) {
		return isItemInArray(buttonTypes.GALLERY, projectJson.buttonTypes);
	};

    $scope.playVideo = function (videoToPlay) {
        $mdDialog.show({
            controller : VideoDialogController,
            templateUrl : '../pages/youtubeDialog.template.html',
            parent : angular.element(document.body),
            locals : {
                videoLink : videoToPlay
            },
            clickOutsideToClose : false
        })
    };

    $scope.openLink = function (link) {
        $window.open(link, '_target');
    };

    $scope.backHome = function () {
        $scope.$emit('viewChange', {screenState : screenState.homeView});
    };

    // Gallery Methods

    $scope.images = [];

    $scope.methods = {};

    $scope.openGallery = function (galleryImages) {
        $scope.images = galleryImages;
        $scope.methods.open();
    };

    // Private Functions

	function isItemInArray(itemName, array) {
		return array.indexOf(itemName) > -1;
	}
};