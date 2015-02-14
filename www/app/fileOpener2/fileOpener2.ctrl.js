angular.module('demo.fileOpener2.ctrl', [])

  .controller('FileOpener2Ctrl', function ($scope, $log, $cordovaFileOpener2) {
        $scope.packageId = '/sdcard/Test/abc.apk';
        $scope.type = 'application/vnd.android.package-archive';
    $scope.open = function() {
        $cordovaFileOpener2.open(
        $scope.packageId,
        $scope.type
      ).then(
        function(){
          $scope.logs = 'Success';
        },
        function(error) {
          alert('error code: '+error.code+' , message: '+error.message);
          $scope.logs = 'error code: '+error.code+' , message: '+error.message;
        }
      );

    };
        $scope.installApk=function(){//安装应用
            $cordovaFileOpener2.open(
                '/sdcard/Test/abc.apk',//路径
                'application/vnd.android.package-archive'//类型
            ).then(function() {
                    // Success!
                    alert("成功");
                }, function(err) {
                    alert("失败"+err);
                    // An error occurred. Show a message to the user
                });
        };
        $scope.openPDF=function(){
            $cordovaFileOpener2.open(//打开PDF
                '/sdcard/Test/test.pdf',
                'application/pdf'
            ).then(function() {
                    // Success!
                    alert("成功");
                }, function(err) {
                    alert("失败"+err);
                    // An error occurred. Show a message to the user
                });
        };
        $scope.uninstallApp=function(){//卸载应用
            $cordovaFileOpener2.uninstall('com.ionicframework.ngcordova488773').then(function() {
                // Uninstall intent activity started.开始卸载
            }, function(err) {
                // An error occurred. Show a message to the user 错误信息
            });
        };

        $scope.installed=function(){//检查是否安装了指定应用
            $cordovaFileOpener2.appIsInstalled('com.ionicframework.ngcordova488773').then(function(res) {
                if (res.status === 0) {
                    // Adobe Reader is not installed.
                    alert("没有安装");
                } else {
                    // Adobe Reader is installed.
                    alert("安装了");
                }
            });
        }
    });
