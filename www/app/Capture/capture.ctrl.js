angular.module('demo.capture.ctrl', [])

  .controller('CaptureCtrl', function ($scope, $cordovaCapture) {
        $scope.captureAudio = function() {/*响应页面中的点击事件*/
            var options = { limit: 2, duration: 5 };
            $cordovaCapture.captureAudio(options).then(function(audioData) {/*获取音频*/
              var  mediaFile = new MediaFile();
                mediaFile=audioData[0];
                $scope.myaudio=mediaFile;
            }, function(err) {
                $scope.myaudio.name="您的设备不支持录音";
            });
        };
        $scope.captureImage = function() {/*获取图片*/
            var options = { limit: 3 };// 获取三次
            $cordovaCapture.captureImage(options).then(function(imageData) {
                var  mediaFile = new MediaFile();
                mediaFile=imageData[0];  // 把返回数据中的第一个赋值给变量
                $scope.myimage=mediaFile;//动态展现在页面中。
            }, function(err) {
                // An error occurred. Show a message to the user
            });
        };
        $scope.captureVideo = function() {/*获取录像*/
            var options = { limit: 1, duration: 5 };//只获取一次，时长五秒
            $cordovaCapture.captureVideo(options).then(function(videoData) {
                var  mediaFile = new MediaFile();
                mediaFile=videoData[0];
                $scope.myvideo=mediaFile;
            }, function(err) {
                // An error occurred. Show a message to the user
            });
        };
  });
