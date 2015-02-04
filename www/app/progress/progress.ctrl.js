angular.module('demo.progress.ctrl', ['ngCordova'])

    .controller('ProgressCtrl', function ($scope, $log, $cordovaProgress) {

        $scope.showSimple = function () {
             alert("test");
        //   ProgressIndicator.showSimple(true);

            $cordovaProgress.showSimple(ture);
            alert("test1");
        };

     /*   $scope.showSimpleWithLabel = function () {

            $cordovaProgress.showSimpleWithLabel(true, "Loading");
        };
        $scope.showSimpleWithLabelDetail = function () {

            $cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "detail")
        };
        $scope.showDeterminate = function () {

            $cordovaProgress.showDeterminate(false, 100000)
        };
        $scope.showDeterminateWithLabel = function () {

            $cordovaProgress.showDeterminateWithLabel(true, 50000, "Loading")
        };

        $scope.showAnnular = function () {

            $cordovaProgress.showAnnular(true, 50000)
        };

        $scope.showAnnularWithLabel = function () {

            $cordovaProgress.showAnnularWithLabel(false, 100000, "Loading")
        };

        $scope.showBar = function () {

            $cordovaProgress.showBar(true, 50000)
        };

        $scope.showBarWithLabel = function () {

            $cordovaProgress.showBarWithLabel(false, 100000, "Loading")
        };

        $scope.showSuccess = function () {

            $cordovaProgress.showSuccess(true, "Success!")
        };
        $scope.showText = function () {

            $cordovaProgress.showText(false, 100000, "Loading")
        };
*/

        $scope.unshowSimple = function () {
            alert("hide");
            $cordovaProgress.hide();

        };



    });
