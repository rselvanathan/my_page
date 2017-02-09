var ProjectsController = function ($scope, $mdDialog, $window, $http, baseApiUrl, globalData) {

	// Controller Initialization
	$scope.loading = true;
	$scope.responseError = false;

	// Initialize the projects value from rest end point when page is first entered
	authenticate().then(function success(response) {
		getProjects(response.data.token);
	}, function error() {
		$scope.responseError=true;
	});

	// Scope functions
	$scope.hasGitHub = function (projectJson) {
		return isItemInArray(buttonTypes.GITHUB, projectJson.buttonTypes);
	};

	$scope.hasVideo = function (projectJson) {
		return isItemInArray(buttonTypes.VIDEO, projectJson.buttonTypes);
	};

	$scope.hasGallery = function (projectJson) {
		return isItemInArray(buttonTypes.GALLERY, projectJson.buttonTypes);
	};

	$scope.hasDirectLink = function (projectJson) {
		return isItemInArray(buttonTypes.DIRECT_LINK, projectJson.buttonTypes);
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

	function authenticate() {
		return $http({
			url: baseApiUrl + "/users/auth",
			method: "POST",
			data: getAuthBody(),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	function getAuthBody() {
		return {
			username : globalData.apiUsername,
			password : globalData.apiPassword
		};
	}

	function getProjects(token) {
		$http({
			url:baseApiUrl+"/projects",
			method:"GET",
			headers: {
				"Authorization": token
			}
		}).then(function success(response) {
			$scope.loading = false;
			$scope.projects = response.data;
		}, function error() {
			$scope.responseError=true;
		});
	}
};