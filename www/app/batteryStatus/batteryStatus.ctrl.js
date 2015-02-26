angular.module('demo.batteryStatus.ctrl', [])

    .controller('BatteryStatusCtrl', function ($scope, $rootScope, $timeout, $cordovaBatteryStatus) {
        $scope.watchs = function () {
            window.addEventListener("batterystatus", onBatteryStatus, false);
            function onBatteryStatus(info) {
                // Handle the online event 获取电池电量
                $rootScope.batteryLevel = info.level + " 是否联接了电插头: " + info.isPlugged;
                alert("电量: " + info.level + " 是否联接了电插头: " + info.isPlugged);
            }
        };
        window.addEventListener("batterycritical", onBatteryCritical, false);
        function onBatteryCritical(info) {
            // Handle the battery critical event
            $rootScope.batteryLevel = "电池电量过低 " + info.level + "%\n请马上充电!";
            alert("电池电量过低 " + info.level + "%\n请马上充电!");
        }
        window.addEventListener("batterylow", onBatteryLow, false);
        function onBatteryLow(info) {
            // Handle the battery low event
            $rootScope.batteryLevel = "电池电量低 " + info.level + "%";
            alert("电池电量低 " + info.level + "%");
        }
    });


/*   document.addEventListener("deviceready", function () {

 $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
 $rootScope.batteryLevel = result.level;       // (0 - 100)
 alert(result.level+"");
 $rootScope.isPluggedIn = result.isPlugged;   // bool
 });

 $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
 $rootScope.batteryLevel = result.level;       // (0 - 100)
 alert(result.level+"");
 $rootScope.isPluggedIn = result.isPlugged;   // bool
 });

 $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
 $rootScope.batteryLevel = result.level;       // (0 - 100)
 $rootScope.isPluggedIn = result.isPlugged;   // bool
 });

 }, false);*/