angular.module('demo.batteryStatus.ctrl', [])

    .controller('BatteryStatusCtrl', function ($scope,$rootScope, $timeout, $cordovaBatteryStatus) {

        console.log("battery status init");

        $rootScope.batteryLevel = 1;       // (0 - 100)
        $rootScope.isPluggedIn = true;   // bool
        $scope.monitor = function () {
            alert("monitor");
                $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
                    var batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                    alert("" + batteryLevel + isPluggedIn);
                });

                $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
                    var batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                });

                $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
                    var batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                });
        };

        $scope.watchs = function () {
           document.addEventListener("deviceready", function () {

                $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
                    $rootScope.batteryLevel = result.level;       // (0 - 100)
                    $rootScope.isPluggedIn = result.isPlugged;   // bool
                });

                $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
                    $rootScope.batteryLevel = result.level;       // (0 - 100)
                    $rootScope.isPluggedIn = result.isPlugged;   // bool
                });

                $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
                    $rootScope.batteryLevel = result.level;       // (0 - 100)
                    $rootScope.isPluggedIn = result.isPlugged;   // bool
                });

            }, false);


        };




    });
