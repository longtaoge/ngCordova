angular.module('demo.media.ctrl', ['ionic','ngCordova'])

  .controller('MediaCtrl', function ($scope, $cordovaMedia) {
    var thisMedia;

        thisMedia = new Media('/android_asset/www/sounds/test.mp3', null, null);
        //说明 这个方法是直接调用 cordova 中的方法，$cordovaMedia 中的方法未测试通过。


        var src = "/src/audio.mp3";
       $scope.media = $cordovaMedia.newMedia(src).then(function() {
            // success
        }, function () {
            // error
        });

        var mediaRec;

   $scope.recordAudio=function () {
            var src = "/android_asset/www/sounds/myrecording.mp3";
             mediaRec = new Media(src,
                // success callback
                function() {
                    console.log("recordAudio():Audio Success");
                },

                // error callback
                function(err) {
                    console.log("recordAudio():Audio Error: "+ err.code);
                });

            // Record audio
            mediaRec.startRecord();
        };


       /* $scope.media.pause();

        $scope.media.stop();

        $scope.media.release();

        $scope.media.seekTo(5000); // milliseconds value

        $scope.media.setVolume(0.5);

        $scope.media.startRecord();

        $scope. media.stopRecord();

        */


        $scope.playMedia2 = function () {
            //  $scope.media.play(); // Android
            mediaRec.play();
           // thisMedia.play();
            console.log("play media");
        };





        $scope.playMedia = function () {
      //  $scope.media.play(); // Android
    thisMedia.play();
      console.log("play media");
    };



    $scope.stopMedia = function () {
      thisMedia.pause();
    };

        $scope.getMediaURL = function (s) {
            if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
            return s;
        };


     $scope.error=   function mediaError(e) {
         alert('Media Error');
         alert(JSON.stringify(e));

     };




  });
