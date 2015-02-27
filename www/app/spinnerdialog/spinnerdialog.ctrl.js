angular.module('demo.spinnerdialog.ctrl', [])
    .controller('SpinnerDialogCtrl', function ($scope,$timeout, $cordovaSpinnerDialog) {
    $scope.show = function () { //显示对话框
        $cordovaSpinnerDialog.show("标题", "提示信息", false);
        $timeout(function() { //超时后自动隐藏
            $cordovaSpinnerDialog.hide();
        }, 8000);
    };
    $scope.hide = function () {//隐藏对话框
        $cordovaSpinnerDialog.hide();
    };
});