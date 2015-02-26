angular.module('demo.actionSheet.ctrl', [])

  .controller('ActionSheetCtrl', function ($scope,$cordovaActionSheet) {
        $scope.actionSheet= function () {
            var options = {
                title: '这里是标题',
                buttonLabels: ['分享到 Facebook', '分享到 Twitter'],
                addCancelButtonWithLabel: '取消',
                androidEnableCancelButton : true,
                winphoneEnableCancelButton : true,
                addDestructiveButtonWithLabel : '删除'
            };
            document.addEventListener("deviceready", function () {

                $cordovaActionSheet.show(options)
                    .then(function(btnIndex) {
                        var index = btnIndex;
                    });
            }, false);
        }
  });
