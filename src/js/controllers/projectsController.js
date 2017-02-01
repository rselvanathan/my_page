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
    }
};