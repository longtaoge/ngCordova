angular.module('demo.batteryStatus.ctrl', [])

  .controller('BatteryStatusCtrl', function ($rootScope, $timeout, $cordovaBatteryStatus) {

    console.log("battery status init");

        document.addEventListener("deviceready", function () {

            $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
                $rootScope.batteryLevel = result.level;       // (0 - 100)
                $rootScope.isPluggedIn  = result.isPlugged;   // bool
            });

            $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
                $rootScope.batteryLevel = result.level;       // (0 - 100)
                $rootScope.isPluggedIn  = result.isPlugged;   // bool
            });

            $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
                $rootScope.batteryLevel = result.level;       // (0 - 100)
                $rootScope.isPluggedIn  = result.isPlugged;   // bool
            });

        }, false);




  /*  document.addEventListener("deviceready", function () {
      $scope.watch = function () {
        console.log("watching battery");
        $cordovaBatteryStatus.$on('batterystatus', function (result) {
          $timeout(function () {
            $scope.batteryLevel = result.level;       // (0 - 100)
            $scope.isPluggedIn = result.isPlugged;   // bool
          });
          alert("result" + result);
        });
      };
    }, false);
*/

    /*
     $cordovaBatteryStatus.$on('batterycritical', function (result) {
     $scope.batteryLevel = result.level;       // (0 - 100)
     $scope.isPluggedIn = result.isPlugged;   // bool
     });

     $cordovaBatteryStatus.$on('batterylow', function (result) {
     $scope.batteryLevel = result.level;       // (0 - 100)
     $scope.isPluggedIn = result.isPlugged;   // bool
     });
     */
  });
