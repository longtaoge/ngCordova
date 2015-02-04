angular.module('demo.localNotification.ctrl', [])

    .controller('LocalNotificationCtrl', function ($scope, $rootScope, $cordovaLocalNotification) {

        $scope.addNotification = function () { /*添加通知*/
            var now = new Date();
            var _60_seconds_from_now = new Date(now + 60 * 1000);
            var event = {
                id: 1,  //设置通知的 id
                date: _60_seconds_from_now, //
                title: "有新消息", //标题
                message: "这里是具体的消息内容",//消息内容
                badge: 2
            };
            $cordovaLocalNotification.add(event).then(function () {
                //回调
            });

        };

        $scope.cancelNotification = function () {  /*取消指定通知*/
            $cordovaLocalNotification.cancel('1').then(function () {
                console.log('callback for cancellation background notification');
            });
        };

        $scope.cancelAllNotification = function () {/*取消所有通知*/
            $cordovaLocalNotification.cancelAll().then(function () {
                console.log('callback for canceling all background notifications');
            });
        };

        $scope.checkIfIsScheduled = function () {/*检查是不是指定id的通知*/
            $cordovaLocalNotification.isScheduled('1').then(function (isScheduled) {
                alert("是的");
                console.log(isScheduled);
            });
        };

       /* $scope.getNotificationIds = function () { *//*获取通知的id*//*
            $cordovaLocalNotification.getScheduledIds().then(function (scheduledIds) {
                alert(scheduledIds + "通知id");
                console.log(scheduledIds);
            });
        };

        $scope.checkIfIsTriggered = function () {*//*检查通知否触发*//*
            $cordovaLocalNotification.isTriggered('1').then(function (isTriggered) {
                console.log(isTriggered);
            });
        };

        $scope.getTriggeredIds = function () {*//*获取触发通知的id*//*
            $cordovaLocalNotification.getTriggeredIds().then(function (triggeredIds) {
                console.log(triggeredIds);
            });
        };

        $scope.notificationDefaults = $cordovaLocalNotification.getDefaults(); //获取通知的默认设置

        $scope.setDefaultOption = function () { //设置默认选项，自动取消
            $cordovaLocalNotification.setDefaults({autoCancel: true});
        };

        $rootScope.$on("$cordovaLocalNotification:canceled", function (e, event) {
            //通知取消时确发
            alert("canceled");
        });

        $rootScope.$on("$cordovaLocalNotification:clicked", function (e, notification) {
            //通知点击时触发
            alert("clicked");
        });

        $rootScope.$on("$cordovaLocalNotification:triggered", function (e, notification) {
            //通知触发时执行
            alert("triggered");
        });

        $rootScope.$on("$cordovaLocalNotification:added", function (e, notification) {
            //添加通知时执行
            alert("added");
        });*/
    });

