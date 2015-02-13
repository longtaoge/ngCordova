angular.module('demo.datePicker.ctrl', [])

  .controller('DatePickerCtrl', function ($scope, $cordovaDatePicker) {
        $scope.todo_date = new Date();
        $scope.pickdate = function() { //选择日期
            var options = {
                date: $scope.todo_date,
                mode: 'date'
            };
            datePicker.show(options, function(d) {
                if (!isNaN(d.getTime())) {  // valid date
                    $scope.$apply(function () {
                        $scope.todo_date = d;
                    });
                }
            });
        };
        $scope.picktime = function() {//选择时间
            var options = {
                date: $scope.todo_date,
                mode: 'time'
            };
            datePicker.show(options, function(d) {
                if (!isNaN(d.getTime())) {  // valid time
                    $scope.$apply(function () {
                        $scope.todo_date = d;
                    });
                }
            });
        };
  });
/*
var options,
    dateType,
    msg = 'not picked yet',
    handleDatePicker = function (date) {
        $scope.data[dateType] = date;
        $scope.$apply();
    };
$scope.datas = {
    date: msg,
    time: msg
};

$scope.pick = function (type) {
    options = {
        date: new Date(),
        mode: type
    };
    dateType = type;
    $cordovaDatePicker.show(options, handleDatePicker);
};*/
