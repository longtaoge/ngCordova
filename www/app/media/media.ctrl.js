angular.module('demo.media.ctrl', ['ionic'])

  .controller('MediaCtrl', function ($scope, $ionicPlatform, $cordovaMedia) {
    var thisMedia;

    $ionicPlatform.ready(function () {
      thisMedia = $cordovaMedia.newMedia('/sample.mp3');

    });


    $scope.playMedia = function () {
      thisMedia.play();
      console.log("play media");
    };

    $scope.stopMedia = function () {
      thisMedia.pause();
    };

  });
