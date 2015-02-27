angular.module('demo.sms.ctrl', [])
    .controller('SmsCtrl', function ($scope) {
        $scope.number = 13167389338;   // 手机号码
        $scope.message = "短信内容";//短信内容
        $scope.sendSms = function () {
            alert($scope.number);
            alert($scope.message);
            var options = {//选项
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    intent: 'INTENT'  // 调用Andrlid系统 SMS messaging发送短信
                    // intent: '' // send SMS without open any other app
                }
            };
            var success = function () {
                alert('信息发送成功');
            };//成功回调
            var error = function (e) {
                alert('信息发送失败:' + e);
            };//失败回调
            sms.send($scope.number, $scope.message, options, success, error);
        }
    });