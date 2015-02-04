angular.module('demo.media.ctrl', [])

    .controller('MediaCtrl', function ($scope, $cordovaMedia) {
        var thisMedia;
        //从地读取音频文件
        thisMedia = new Media('/android_asset/www/sounds/test.mp3', null, null);
        //说明 这个方法是直接调用 cordova 中的方法，$cordovaMedia 中的方法未测试通过。
        $scope.recordAudio = function () {
            $scope.mediaFilePath = "audio.mp3";
            $scope.recordingMedia = new Media($scope.mediaFilePath, function () {
                alert("录音成功");
            }, function (err) {
                //alert("录音失败" + err);
            });
            // 录音
            $scope.recordingMedia.startRecord();
        };
        $scope.playSound = function () { /*播放声音*/
            $scope.audioMedia = new Media($scope.mediaFilePath, null, null);
            $scope.audioMedia.play();

        };

        $scope.stoprecordAudio = function () {/*播放录制的音频*/
            $scope.recordingMedia.stop();
            $scope.recordingMedia.release();
        };

        $scope.playMedia = function () {
           /*播放本地视频*/
            thisMedia.play();
            console.log("play media");
        };

        $scope.stopMedia = function () {  /*停止播放所有音频*/
            thisMedia.pause();
            $scope.audioMedia.stop();
            $scope.audioMedia.release();

        };

        $scope.getMediaURL = function (s) { //  如果是android设备，
            if (device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
            return s;
        };


    });
