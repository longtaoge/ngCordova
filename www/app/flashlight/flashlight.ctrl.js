angular.module('demo.flashlight.ctrl', [])

  .controller('FlashlightCtrl', function ($scope, $cordovaFlashlight) {
    $scope.on = function () { //打开手电筒
      $cordovaFlashlight.switchOn();
    };
    $scope.off = function () {//关闭手电筒
      $cordovaFlashlight.switchOff();
    };
   $scope.toggle=function(){//切换手电筒状态
       $cordovaFlashlight.toggle();
   };
  });
