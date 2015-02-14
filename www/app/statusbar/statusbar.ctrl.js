angular.module('demo.statusbar.ctrl', [])
  .controller('StatusbarCtrl', function ($scope, $cordovaStatusbar) {
        $cordovaStatusbar.overlaysWebView(true);
    $scope.toggleBar = function () { //切换状态栏状态
      if ($cordovaStatusbar.isVisible()) {
        $cordovaStatusbar.hide();//如果显示则隐藏
      } else {
        $cordovaStatusbar.show();//如果隐藏则显示
      }
    };
  $scope.setStyle=function(){//Android 平台下未起作用
      //$cordovaStatusbar.overlaysWebView(true);
      // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
      $cordovaStatusbar.style(0);
      // supported names: black, darkGray, lightGray, white, gray, red, green,
      // blue, cyan, yellow, magenta, orange, purple, brown
      $cordovaStatusbar.styleColor('white');
      $cordovaStatusbar.styleHex('#00FFFF');
  }
  });