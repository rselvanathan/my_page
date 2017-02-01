var ProjectsController = function ($scope, $mdDialog) {
    $scope.playVideo = function (videoToPlay) {
        $mdDialog.show({
            controller : VideoDialogController,
            templateUrl : '../pages/youtubeDialog.template.html',
            parent : angular.element(document.body),
            targetEvent : videoToPlay,
            clickOutsideToClose : false
        })
    };
};