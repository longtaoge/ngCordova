angular.module('demo.barcodeScanner.ctrl', [])

  .controller('BarcodeScannerCtrl', function ($scope, $cordovaBarcodeScanner) {
    $scope.scan = function () {
      $cordovaBarcodeScanner
        .scan() //开始扫描
        .then(function (result) { //如有数据，返回数据
          $scope.scanResult = result;
        }, function (err) { // 出现错误后的回调
          $scope.scanResult = 'SCAN ERROR (see console)';
          console.error(err);
        });
    };
  });
