angular.module('demo.batteryStatus.ctrl', [])

    .controller('BatteryStatusCtrl', function ($scope,$rootScope, $timeout, $cordovaBatteryStatus) {

        console.log("battery status init");

        $rootScope.batteryLevel = 1;       // (0 - 100)
        $scope.batteryLevel=$rootScope.batteryLevel;
        $rootScope.isPluggedIn = true;   // bool
        $scope.monitor = function () {
            alert("monitor");
                $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
                   $rootscope.batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                    alert("" + $rootscope.batteryLevel + isPluggedIn);
                });

                $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
                    $rootscope.batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                    alert("" + $rootscope.batteryLevel + isPluggedIn);
                });

                $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
                    $rootscope.batteryLevel = result.level;       // (0 - 100)
                    var isPluggedIn = result.isPlugged;   // bool
                    alert("" + $rootscope.batteryLevel + isPluggedIn);
                });
        };

        $scope.watchs = function () {

         /*   window.addEventListener("batterystatus", onBatteryStatus, false);

            function onBatteryStatus(info) {
                // Handle the online event
                $rootScope.batteryLevel = info.level;
                alert("level="+info.level);
                console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
            }
*/

            window.addEventListener("deviceready", function () {

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
