angular.module('demo.badge.ctrl', [])
    .controller('BadgeCtrl', function ($scope, $cordovaBadge) {

        $scope.hasPermission = function () { //检查权限
            $cordovaBadge.hasPermission().then(function (yes) {
                // 拥有权限时的回调函数
                alert("权限=" + yes);
            }, function (no) { //没有根限时的回调
                alert("权限=" + no);
            });
        };
        $scope.clearBadge = function () { //清除通知
            cordova.plugins.notification.badge.clear();
        };
        $scope.setBadge = function (rand) {//随机设置数字
            var number = rand ? Math.round(Math.random() * 100) : 10;
            cordova.plugins.notification.badge.set(number);
        };
        $scope.getBadge = function () {//获取数字
            cordova.plugins.notification.badge.get(function (number) {
                alert(number);
            });
        };
        $scope.promptForPermission = function () {
            cordova.plugins.notification.badge.promptForPermission();
        };
        $scope.switchAutoClear = function () { //自动清除
            cordova.plugins.notification.badge.configure({
                autoClear: !cordova.plugins.notification.badge._config.autoClear
            });
            alert('Set autoClear to \n' + cordova.plugins.notification.badge._config.autoClear);
        };
        $scope.changeTitles = function () { //设置新标题
            var title = "新" + cordova.plugins.notification.badge._config.title;
            cordova.plugins.notification.badge.configure({
                title: title
            });
            alert('Set title to \n"' + title + '"');
        };

    });