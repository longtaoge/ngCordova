angular.module('demo.deviceMotion.ctrl', [])

  .controller('DeviceMotionCtrl', function ($scope, $cordovaDeviceMotion) {
        $scope.getAcceleration=function(){
            $cordovaDeviceMotion
                .getCurrentAcceleration()//获取当前的加速度值
                .then(function (motion) {
                    $scope.motion = motion;
                }, function (err) {
                    $scope.msg = err.message;
                });
        };
    $scope.watchAcceleration = function () {
      var options = { frequency: 3000 };  // 监控频率 单位为毫秒值
       $scope.watch = $cordovaDeviceMotion.watchAcceleration(options);
        $scope.watch.then(
            null,
            function(error) {
               // 错误回调
            },
            function(result) {
                $scope.motion = result;
            });
    };
    $scope.clearWatch = function () {
       $scope.watch.clearWatch(); //停止监控
    };
  });

