angular.module('demo.clipboard.ctrl', [])

  .controller('ClipboardCtrl', function ($scope, $log,$cordovaClipboard) {
        $scope.srcdata="This is some text to be copied";  //源数据
        $scope.targetdata="";
        $scope.data="";
        $scope.copys=function(){
            $cordovaClipboard
                .copy( $scope.srcdata)// 点击复制按钮，复制数据
                .then(function () {
                    // success 拷贝成功后的
                }, function () {
                    // error
                    alert("error");
                });
        };
     $scope.paste=function(){

         $cordovaClipboard
             .paste()
             .then(function (result) {
                 $scope.targetdata=$scope.srcdata;
                 // success, use result
             }, function () {
                 // error
             });
     };
  });
