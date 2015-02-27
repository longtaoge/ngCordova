angular.module('demo.pindialog.ctrl', [])
    .controller('PinDialogCtrl', function ($scope, $cordovaPinDialog) {

        $scope.pindialog2 = function () {
            window.plugins.pinDialog.prompt("消息", $scope.callback, "标题", ["确定", "取消"]);
            $scope.callback = function (results) {
                if (results.buttonIndex == 1) {
                    // OK clicked, show input value
                    alert(results.input1);
                }
                if (results.buttonIndex == 2) {
                    // Cancel clicked
                    alert("Cancel");
                }
            };
        };
        $scope.pindialog = function () {
            $cordovaPinDialog.prompt('提示信息', '标题').then(
                function (result) {
                    // 成功后的回调 返回输入值
                    alert("成功" + result.input1);
                },
                function (error) {//失败后的回调函数
                    alert("失败");
                    // error
                })


        }
    });