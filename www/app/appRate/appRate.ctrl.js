angular.module('demo.appRate.ctrl', [])

    .controller('AppRateCtrl', function ($scope, $log, $cordovaAppRate) {

        $scope.promptRating = function () {//定义一个方法，以响应页面中的点击事件x
            $cordovaAppRate.promptForRating(true).then(function (result) {//参数为true表示显对对话框
                console.log("result: " + result);//成功时的回调
            }, function (error) {
                console.log("ERROR: " + error); //失败时的回调
            })
        };
    });
