angular.module('demo.inAppBrowser.ctrl', [])
    .controller('InAppBrowserCtrl', function ($scope, $rootScope, $cordovaInAppBrowser) {
        $scope.openBrowser = function () {
            document.addEventListener('deviceready', function () {
                var options = {//覆盖默认选项的选项
                    location: "no",
                    clearcache: 'no',
                    toolbar: 'no'
                };
                $cordovaInAppBrowser.open('http://www.ths.com.cn/', '_blank', options).then(function () {
                    //打开指定url
                    console.log("内部浏览器打开http://www.ths.com.cn/成功");
                }, function (error) {
                    console.log("错误: " + error);
                });
            }, false);
        };
        document.addEventListener('deviceready', function () {//open 方法执行后 添加监听事件
            $rootScope.$on('$cordovaInAppBrowser:loadstart', function (e, event) {
                //监听载入数据
                alert("打开浏览器");
            });
            $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
                //监听退出事件
                alert("退出浏览器");
                console.log(JSON.stringify(result));
            });
            $rootScope.$on("$cordovaInAppBrowser:loadstop", function (event, result) {
                //监听载入数据完成事件
                alert("载入完成");
                console.log(JSON.stringify(result));
            })
        }, false);
    });
