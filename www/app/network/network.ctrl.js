angular.module('demo.network.ctrl', [])

  .controller('NetworkCtrl', function ($scope, $cordovaNetwork) {
    $scope.networkType = null;
    $scope.connectionType = null;
    document.addEventListener("deviceready", function () {
      $scope.networkType = $cordovaNetwork.getNetwork(); /*获取网络状态*/

      if ($cordovaNetwork.isOnline()) { /*如果在线执行*/
        $scope.connectionType = 'Online';
      }
      else if ($cordovaNetwork.isOffline()) {/*如果离线执行下列方法*/
        $scope.connectionType = 'Offline';
      }
      else {
        $scope.errorMsg = 'Error getting isOffline / isOnline methods';
      }
    }, false);

  });
