angular.module('demo.calendar.ctrl', [])
    .controller('CalendarCtrl', function ($scope, $cordovaCalendar) {
        $scope.startDate = new Date(2015, 0, 6, 18, 30, 0, 0, 0);// 开始日期beware: month 0 = january, 11 = december
        $scope.endDate = new Date(2015, 1, 6, 12, 0, 0, 0, 0);//结束日期
        $scope.title = "My nice event"; //事件标题
        $scope.location = "Home";//位置
        $scope.notes = "Some notes about this event.";//摘要
        $scope.success = function (message) { //成功回调
            alert("Success: " + JSON.stringify(message));
        };
        $scope.error = function (message) { //失败回调
            alert("Error: " + message);
        };
        $scope.calendarName = "MyCal";
        $scope.openCalendar = function () {//打开日历
            var d = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
            window.plugins.calendar.openCalendar(d, $scope.success, $scope.error);
            //window.plugins.calendar.openCalendar();
        };

        $scope.createCalendar = function () { //创建日历 仅支持IOS
            window.plugins.calendar.createCalendar("日历名称", $scope.success, $scope.error);
        };
        $scope.deleteCalendar = function () { //删除日历 仅支挂ios
            $cordovaCalendar.deleteCalendar('Cordova Calendar').then(function (result) {
                // success
            }, function (err) {
                // error
            });
        };
        $scope.createEvent = function () {
            window.plugins.calendar.createEvent($scope.title, $scope.location, $scope.notes, $scope.startDate, $scope.endDate, $scope.success, $scope.error);
        };
        $scope.createEventWithOptions = function () {
            // 创建带选项的事件
            var calOptions = window.plugins.calendar.getCalendarOptions(); // grab the defaults
            calOptions.firstReminderMinutes = 120; // default is 60, pass in null for no reminder (alarm)
            calOptions.secondReminderMinutes = 5;
            // Added these options in version 4.2.4:
            calOptions.recurrence = "monthly"; // supported are: daily, weekly, monthly, yearly
            calOptions.recurrenceEndDate = new Date(2015, 6, 1, 0, 0, 0, 0, 0); // leave null to add events into infinity and beyond
            calOptions.calendarName = "MyCreatedCalendar"; // iOS only
            window.plugins.calendar.createEventWithOptions($scope.title, $scope.location, $scope.notes, $scope.startDate, $scope.endDate, calOptions, $scope.success, $scope.error);

        };

        $scope.createEventInteractively = function () {
            window.plugins.calendar.createEventInteractively($scope.title, $scope.location, $scope.notes, $scope.startDate, $scope.endDate, $scope.success, $scope.error);
        };
        $scope.createEventInNamedCalendar = function () { //仅支持IOS
            $cordovaCalendar.createEventInNamedCalendar({
                title: 'Space Race',
                location: 'The Moon',
                notes: 'Bring sandwiches',
                startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
                endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
                calendarName: 'Cordova Calendar'
            }).then(function (result) {
                // success
            }, function (err) {
                // error
            });

        };

        $scope.findEvent = function () {
            window.plugins.calendar.findEvent($scope.title, $scope.location, $scope.notes, $scope.startDate, $scope.endDate, $scope.success, $scope.error);
        };

        $scope.listEventsInRange = function () {
            window.plugins.calendar.listEventsInRange($scope.startDate, $scope.endDate, $scope.success, $scope.error);
            /*   $cordovaCalendar.listEventsInRange(
             new Date(2015, 0, 6, 0, 0, 0, 0, 0),
             new Date(2015, 1, 6, 0, 0, 0, 0, 0)
             ).then(function (result) {
             // success
             alert("Success: " + JSON.stringify(result));
             }, function (err) {
             // error
             alert("err: " + JSON.stringify(err));
             });*/

        };
        $scope.listCalendars = function () {
            window.plugins.calendar.listCalendars($scope.success, $scope.error);
        };

        $scope.findAllEventsInNamedCalendar = function () {
            window.plugins.calendar.findAllEventsInNamedCalendar($scope.calendarName, $scope.success, $scope.error);
            $cordovaCalendar.findAllEventsInNamedCalendar('Cordova Calendar').then(function (result) {
                // success
            }, function (err) {
                // error
            });
        };

        $scope.modifyEvent = function () { //仅支持IOS
            $cordovaCalendar.modifyEvent({
                title: 'Space Race',
                location: 'The Moon',
                notes: 'Bring sandwiches',
                startDate: new Date(2015, 0, 6, 18, 30, 0, 0, 0),
                endDate: new Date(2015, 1, 6, 12, 0, 0, 0, 0),
                newTitle: 'Ostrich Race',
                newLocation: 'Africa',
                newNotes: 'Bring a saddle',
                newStartDate: new Date(2015, 2, 12, 19, 0, 0, 0, 0),
                newEndDate: new Date(2015, 2, 12, 22, 30, 0, 0, 0)
            }).then(function (result) {
                // success
            }, function (err) {
                // error
            });

        };
        $scope.deleteEvent = function () {
            window.plugins.calendar.deleteEvent($scope.title, $scope.location, $scope.notes, $scope.startDate, $scope.endDate, $scope.success, $scope.error);
        };
    });