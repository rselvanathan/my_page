var ProjectsController = function ($scope, $mdDialog, $window) {
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

    var starrageImages = [
        {
            url : 'https://i.imgur.com/7Kde97e.jpg'
        },
        {
            url : 'https://i.imgur.com/LTvM1G6.jpg'
        },
        {
            url : 'https://i.imgur.com/apKizGw.jpg'
        },
        {
            url : 'https://i.imgur.com/Z9jNHTM.jpg'
        },
        {
            url : 'https://i.imgur.com/GFDfLRO.jpg'
        }
    ];

	var escapeImages = [
		{
			url : 'https://i.imgur.com/Hojf47Q.jpg'
		},
		{
			url : 'https://i.imgur.com/kJP7MCx.jpg'
		},
		{
			url : 'https://i.imgur.com/XFCNOe3.jpg'
		},
		{
			url : 'https://i.imgur.com/fpcJEiI.jpg'
		},
		{
			url : 'https://i.imgur.com/XdIvAq6.jpg'
		}
	];

    $scope.methods = {};

    $scope.openGallery = function (projectType) {
        if(projectType === 'STAR_RAGE') {
			$scope.images = starrageImages;
        } else {
			$scope.images = escapeImages;
		}
        $scope.methods.open();
    };
};