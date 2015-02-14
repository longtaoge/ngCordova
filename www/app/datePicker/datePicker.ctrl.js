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
                mode: 'time',
                minuteInterval:5
            };
            datePicker.show(options, function(d) {
               if (!isNaN(d.getTime())) {  // valid time
                    $scope.$apply(function () {
                        $scope.todo_date = d;
                    });
                }
            });
        };

        $scope.select=function(){
            var options = { //经测试，部分参数在Android 系统中未生效
                date: $scope.todo_date,//设置初始值
                mode: 'time', // or 'data' 选择模式，日期或时间
                minDate: $scope.todo_date - 1000,//最小时间
               // maxDate:$scope.todo_date+1000,//最大时间
                allowOldDates: true,//是否显示/隐藏所选时间之前的时间
                allowFutureDates: false,//是否显示/隐藏所选时间之后的时间
                doneButtonLabel: '确认',//完成按钮的标签,
                doneButtonColor: '#F2F3F4',//完成按钮的十六进制颜色值,
                cancelButtonLabel: 'CANCEL',//取消按钮的标签,
                cancelButtonColor: '#000000',//取消按钮的十六进制颜色值,
                minuteInterval:5//选择器的选择步长，单位为分钟
            };
            $cordovaDatePicker.show(options).then(function(date){
                $scope.todo_date = date;
            });
        };
  });