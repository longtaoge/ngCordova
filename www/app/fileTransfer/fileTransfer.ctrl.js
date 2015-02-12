angular.module('demo.fileTransfer.ctrl', [])
/*http://www.telerik.com/sfimages/default-source/logos/app_builder.png*/
  .controller('FileTransferCtrl', function ($scope, $timeout, $cordovaFileTransfer) {

        $scope.downloadProgress =1;

        document.addEventListener('deviceready', function () {

            var url = "http://www.telerik.com/sfimages/default-source/logos/app_builder.png";
            var targetPath = cordova.file.documentsDirectory + "testImage.png";
            var trustHosts = true;
            var options = {};


           /* $scope.downloadFile=function(){ };*/

                $cordovaFileTransfer.download(url, targetPath, null, trustHosts)
                    .then(function(result) {
                        // Success!
                    }, function(err) {
                        // Error
                    }, function (progress) {
                        $timeout(function () {
                            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                        })
                    });




        }, false);


      /*  document.addEventListener('deviceready', function () {

            $cordovaFileTransfer.upload(server, filePath, options)
                .then(function(result) {
                    // Success!
                }, function(err) {
                    // Error
                }, function (progress) {
                    // constant progress updates
                });

        }, false);
*/


        /*
            $scope.downloadFile = function () {

                    var url = "http://b.hiphotos.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=a0794c174fc2d562e605d8bf8678fb8a/d01373f082025aafbd4e9cbcfbedab64034f1a4c.jpg";
                    var targetPath = cordova.file.documentsDirectory + "testImage.png";
                    var trustHosts = true;
                    var options = {};

                    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                        .then(function(result) {
                            // Success!
                            alert("Success");
                        }, function(err) {
                            alert("err");
                            // Error
                        }, function (progress) {
                            $timeout(function () {
                                $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                            })
                        });
            };
        */

  });


/*document.addEventListener('deviceready', function () {
 // var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
 var url = "http://b.hiphotos.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=a0794c174fc2d562e605d8bf8678fb8a/d01373f082025aafbd4e9cbcfbedab64034f1a4c.jpg";
 var fileDir = cordova.file.documentsDirectory + "testImage.png";

 var download = $cordovaFileTransfer.download(url, fileDir).then(function (success) {
 console.log("success " + JSON.stringify(success));
 $timeout(function () {
 $scope.downloadProgress = 100
 }, 1000);
 }, function (error) {
 console.log("Error " + JSON.stringify(error));
 }, function (progress) {
 $timeout(function () {
 $scope.downloadProgress = (progress.loaded / progress.total) * 100;

 });
 });


 if ($scope.downloadProgress > 0.1) {
 download.abort();
 }
 })*/


/*var _downApp = function (v, userId, moreServ, $scope,sebTip) {
    var fileName = v + '.apk';
    var uri = encodeURI(sebAppConfig.resUrl + 'app/' + fileName);
    $scope.weight = 0;
    if (ionic.Platform.isIOS) {
        window.location.href = sebAppConfig.iosAppUrl;
        $scope.finsh = false;
    }
    if (ionic.Platform.isAndroid) {
        $scope.finsh = true;
        window.cordova.AppInstaller.downloadAndInstall(uri, function(){
            sebTip.tip({
                template: '开始安装.'
            });
            moreServ.update(userId, v, function (status, data) {});
        }, function(err){
            sebTip.tip({
                template: '安装文件下载失败.'
            });
            $scope.finsh = false;
        }, function(progressEvent){
            if (progressEvent.lengthComputable) {
                $scope.weight = (progressEvent.loaded / progressEvent.total)*100;
                if(progressEvent.loaded === progressEvent.total){
                    setTimeout(function(){
                        $scope.finsh = false;
                    },1000);
                }
            }
        });
    }
}*/

/*

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}
function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
//var uri = encodeURI("http://some.server.com/upload.php");
var uri = encodeURI("http://b.hiphotos.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=a0794c174fc2d562e605d8bf8678fb8a/d01373f082025aafbd4e9cbcfbedab64034f1a4c.jpg");

var options = new FileUploadOptions();
options.fileKey="file";
options.fileName=uri.substr(uri.lastIndexOf('/')+1);
options.mimeType="text/plain";

var headers={'headerParam':'headerValue'};

options.headers = headers;

var ft = new FileTransfer();
ft.onprogress = function(progressEvent) {
    if (progressEvent.lengthComputable) {
        loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
    } else {
        loadingStatus.increment();
    }
};
// ft.upload(fileURL, uri, win, fail, options);
$scope.downloadFile=function(){
    alert("testdownload");
    ft.onprogress();
};

*/
