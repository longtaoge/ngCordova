angular.module('demo.globalization.ctrl', [])

  .controller('GlobalizationCtrl', function ($scope, $cordovaGlobalization) {

    function init() {
      $cordovaGlobalization.getPreferredLanguage().then(
        function (result) {  //成功后的回调函数
          $scope.language = result.value;
        },
        function (error) { //失败后的回调函数
          $scope.language = err.message;
        });
      $cordovaGlobalization.getLocaleName().then(
        function (result) {//成功后的回调函数
          $scope.locale = result.value;
        },
        function (error) {//失败后的回调函数
          $scope.locale = err.message;
        });
      $cordovaGlobalization.getFirstDayOfWeek().then(
        function (result) {//成功后的回调函数
          $scope.fdow = result.value;
        },
        function (error) {//失败后的回调函数
          $scope.fdow = err.message;
        });
    }
    $scope.refresh = function () {//刷新
      init();
    };

    init();
    // Soon implemented:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
  });
