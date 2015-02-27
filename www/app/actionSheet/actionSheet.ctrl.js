angular.module('demo.actionSheet.ctrl', [])

    .controller('ActionSheetCtrl', function ($scope, $cordovaActionSheet) {
        $scope.actionSheet = function () {
            var options = {//选项
                title: '这里是标题',
                buttonLabels: ['分享到 Facebook', '分享到 Twitter'],//按钮标签数给，索引从1开始
                addCancelButtonWithLabel: '取消',//取消按钮标签
                androidEnableCancelButton: true,//激活Android取消按钮
                winphoneEnableCancelButton: true,//激活winphone取消按钮
                addDestructiveButtonWithLabel: '删除'//添加红色按钮
            };
            document.addEventListener("deviceready", function () {
                $cordovaActionSheet.show(options)
                    .then(function (btnIndex) {//成功后的回调
                        var index = btnIndex;//返回所选按钮的索引
                    });
            }, false);
        }
    });
