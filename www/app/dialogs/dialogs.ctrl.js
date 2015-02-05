angular.module('demo.dialogs.ctrl', [])

  .controller('DialogsCtrl', function ($scope, $cordovaDialogs) {

    $scope.action = "按下任意按钮测试";

    $scope.alert = function () {
      $scope.action = "Alert";
      $cordovaDialogs.alert('Wow!旺！','标题','确认');
    };

    $scope.confirm = function () {
      $scope.action = "Confirm";
      $cordovaDialogs.confirm('确认提交吗？', "标题",["确认","取消"]).then(function (buttonIndex) {
        $cordovaDialogs.alert("按钮索引 : " + buttonIndex);
      });
    };
    $scope.prompt = function () {
      $scope.action = "Prompt";
      $cordovaDialogs.prompt('请登录', "标题",["确认","取消"]).then(function (result) {
       $cordovaDialogs.alert("输入的值: " + result.input1 + "\n 按钮索引 : " + result.buttonIndex);
      });
    };
    $scope.beep = function () {
      $scope.action = "Beep 峰鸣";
      $cordovaDialogs.beep(3);
    };
  });

