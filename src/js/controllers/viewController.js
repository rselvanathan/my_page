var ViewController = function ($scope, $location) {
  $scope.$on('viewChange', function(event, data){
     if(data.screenState === screenState.projectsView) {
         $location.path("/projects");
     }
  });
};
