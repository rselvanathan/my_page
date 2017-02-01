var VideoDialogController = function($scope, $mdDialog, videoLink) {
    $scope.videoLink = videoLink;

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
};