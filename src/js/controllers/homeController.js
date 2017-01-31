var HomeController = function ($scope) {
    $scope.projectsClick = function () {
      $scope.$emit('viewChange', {screenState : screenState.projectsView});
    };
};