angular.module('demo.keyboard.ctrl', [])
    .controller('KeyboardCtrl', function ($scope) {
        $scope.show = function () {
            cordova.plugins.Keyboard.show();//显示键盘
            window.addEventListener('native.keyboardshow', keyboardShowHandler);
            function keyboardShowHandler(e) {//监听键盘弹出事件，
                alert('Keyboard height is: ' + e.keyboardHeight);
                $scope.keyboardhigh = "键盘高度为" + e.keyboardHeight;

            }
        };
        $scope.close = function () {//关闭键盘
            cordova.plugins.Keyboard.close();
        }
    });