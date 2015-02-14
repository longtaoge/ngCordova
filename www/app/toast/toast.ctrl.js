angular.module('demo.toast.ctrl', [])

  .controller('ToastCtrl', function ($scope, $cordovaToast) {
    $scope.toastMessage = '这是一条吐丝';
    $scope.center = function (message) {
      $cordovaToast.show(message, 'long', 'center')
          //在中间长时间显示一条信息
        .then(function (success) {
          console.log("center msg displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    };
    $scope.top = function (message) {
        //在顶部显示一条信息
      $cordovaToast
        .showShortTop(message)
        .then(function (success) {
          console.log("short top displayed ");
        }, function (error) {
          $scope.msg = error.message;
        });
    };
    $scope.bottom = function (message) {
        //在底部显示一条吐丝
      $cordovaToast
        .showLongBottom(message)
        .then(function (success) {
          console.log("long bottom displayed");
        }, function (error) {
          $scope.msg = error.message;
        });
    }
  });
