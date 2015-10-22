angular.module('demo.appversion.ctrl', [])

  .controller('AppVersionCtrl', function($scope, $cordovaAppVersion) { //获取应用版本号
       $scope.getMyVersion=function () {
            $cordovaAppVersion.getAppVersion().then(function (version) {//获取版本号 成功后的回调
                $scope.myversion = version; //将得到的版本号赋值给 变量
            });
       };
  });
