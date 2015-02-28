angular.module('demo.nativeaudio.ctrl', [])
    .controller('NativeAudioCtrl', function ($scope, $cordovaNativeAudio, $timeout) {
        $cordovaNativeAudio
            .preloadSimple('click', 'app/nativeaudio/audio/click.mp3') //加载音频文件
            .then(function (msg) { //加载成功后的回调函数
                console.log(msg);
            }, function (error) {//加载失败后的回调函数
                alert(error);
            });
        $cordovaNativeAudio
            .preloadComplex('music', 'app/nativeaudio/audio/music.mp3', 1, 1) //加载音频文件
            .then(function (msg) {//加载成功后的回调函数
                console.log(msg);
            }, function (error) {//加载失败后的回调函数
                console.error(error);
            });
        $scope.play = function () {
            $cordovaNativeAudio.play('click');//播放
            $cordovaNativeAudio.loop('music');//循环播放
            $timeout(function () { //超时后停止
                $cordovaNativeAudio.stop('music');
                $cordovaNativeAudio.unload('click');//释放资源
                $cordovaNativeAudio.unload('music');//释放资源
            }, 1000 * 60);
        };
        $scope.stop = function () { //停止播放
            $cordovaNativeAudio.stop('music');
        };
    });