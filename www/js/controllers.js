angular.module('app.controllers', [])

.controller('page1Ctrl', function($scope) {


  $scope.startTimer = function() {
    console.log('starting timer...');
    $scope.time = "25:00";

    
  }
})
