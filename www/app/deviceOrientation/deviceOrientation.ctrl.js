angular.module('demo.deviceOrientation.ctrl', [])

    .controller('DeviceOrientationCtrl', function ($scope, $timeout, $cordovaDeviceOrientation) {
        $scope.getHeading = function () {
            $cordovaDeviceOrientation.getCurrentHeading().then(function (result) {
                $scope.heading = result;
            }, function (err) {
                $scope.msg = err.message;
            });
        };
        $scope.watchHeading = function () {
            var options = {
                frequency: 300,// 更新间隔 300毫秒
                filter: true     //监控成功回调，如果设置，将忽略更新频率
            };
            $scope.watch = $cordovaDeviceOrientation.watchHeading(options).then(
                null,
                function(error) {
                    // An error occurred
                },
                function(result) {   // 更新传感值
                    $scope.heading = result;
                });
        };
        $scope.clearWatch = function () {
            $cordovaDeviceOrientation.clearWatch( $scope.watch);//停止监控
        };
    });
