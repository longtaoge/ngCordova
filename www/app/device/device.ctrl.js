angular.module('demo.device.ctrl', [])

  .controller('DeviceCtrl', function ($scope, $state, $cordovaDevice) {

    var init = function () {
      console.log("initializing device");
      try {
        document.addEventListener("deviceready", function () {
          $scope.available = $cordovaDevice.getDevice().available;
          $scope.cordova = $cordovaDevice.getCordova();  //Crodova 版本
          $scope.model = $cordovaDevice.getModel();//手机型号
          $scope.platform = $cordovaDevice.getPlatform();//平台
          $scope.uuid = $cordovaDevice.getUUID();//设备识别号
          $scope.version = $cordovaDevice.getVersion();//系统版本号
        }, false);
      }
      catch (err) {
        console.log("Error " + err.message);
        alert("error " + err.$$failure.message);
      }
    };

    init();
  });
