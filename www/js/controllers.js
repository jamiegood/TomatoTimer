angular.module('app.controllers', ['timer'])

.controller('page1Ctrl', function($scope, $ionicBackdrop, $ionicPopup, $timeout) {


  $scope.startTimer = function() {
    console.log('starting timer...');
    $scope.time = "25:00";
    $scope.$broadcast('timer-start');
  }


  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Don\'t eat that!',
      template: 'Well done<br /><br/>Now take a break'
    });

    $timeout(function() {
       alertPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };

  $scope.finished = function() {
    console.log('timer finsihed');
    document.getElementById('audio').play()
    // $ionicPopup.alert({
    //   title: 'Don\'t eat that!',
    //   template: 'It might taste good'
    // });
    $scope.showAlert();
  }

  // An alert dialog
  // An alert dialog


  // A confirm dialog
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Consume Ice Cream',
      template: 'Are you sure you want to eat this ice cream?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };

  //$scope.showConfirm();

})
