angular.module('demo.appAvailability.ctrl', [])

  .controller('AppAvailabilityCtrl', function ($scope,$cordovaAppAvailability) {
        $scope.availability= function () {

           $cordovaAppAvailability.check('com.ionicframework.ngcordova488773')
                .then(function() {
                    alert("有");//表示有安装
                }, function () {
                    alert("没有");//表示没有安装
                });
        }
  });
