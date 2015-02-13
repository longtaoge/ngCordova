angular.module('demo.fileTransfer.ctrl', [])
  .controller('FileTransferCtrl', function ($scope, $timeout, $cordovaFileTransfer) {
          $scope.downloadFile=function(){
              //要下载文件的URL
              var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
              //文件的存储路径
              var targetPath = cordova.file.externalRootDirectory + url.substr(url.lastIndexOf('/')+1);
              //接受所有安全证书
              var trustHosts = true;
              //选项
              var options = {};
                $cordovaFileTransfer.download(url, targetPath, null, trustHosts)
                    .then(function(result) {
                        // Success! 成功后的回调方法
                    }, function(err) {
                        // Error 错误后的回调方法
                    }, function (progress) {
                        $timeout(function () {//下载进度
                            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                        })
                    });
          };
        $scope.UploadFileFile=function(){
            var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
            //要上传文件的服务器URL   本例服务器代码见server 文件夹
            var  server= "http://192.168.191.1/androidWeb/UploadFile";
            //文件的本地存储路径
            var filePath = cordova.file.externalRootDirectory +url.substr(url.lastIndexOf('/')+1);
            //接受所有安全证书
            var trustHosts = true;
            //选项
            var options = {};
            $cordovaFileTransfer.upload(server, filePath, options)
                .then(function(result) {
                    // Success!
                    $scope.downloadProgress1 = (100/100) * 100;
                    alert("成功");
                }, function(err) {
                    // Error
                    alert("失败");
                }, function (progress) {
                    // constant progress updates 进度条
                    $scope.downloadProgress1 = (progress.loaded / progress.total) * 100;
                });
        }
  });
