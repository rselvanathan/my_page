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

    $scope.images = [
        {
            url : 'https://i.imgur.com/V4c6E39.jpg'
        },
        {
            url : 'https://i.imgur.com/9JuVdHO.jpg'
        }
    ];

    $scope.methods = {};

    $scope.openGallery = function () {
        $scope.methods.open();
    };
};