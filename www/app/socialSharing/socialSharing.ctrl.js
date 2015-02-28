angular.module('demo.socialSharing.ctrl', [])

    .controller('SocialSharingCtrl', function ($scope, $cordovaSocialSharing) {
        var message = "要分享的信息"; //要分享的信息内容
        var subject = "副标题";
        var file = "";//文件
        var link = "http://www.baidu.com";//链接
        var image = "http://static.open-open.com/300-250java.png";//图片
        var number = "13167389338";//手机号码
        var socialType = null;
        var toArr = null;
        var bccArr = null;
        $scope.share = function () {
            $cordovaSocialSharing
                .share(message, subject, file, link) // 使用本地工具分享
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };

        $scope.shareViaTwitter = function () {//通过Twitter分享
            $cordovaSocialSharing
                .shareViaTwitter(message, image, link)
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };

        $scope.shareViaWhatsApp = function () {//通过WhatsApp分享
            $cordovaSocialSharing
                .shareViaWhatsApp(message, image, link)
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };
        $scope.shareViaFacebook = function () {//通过Facebook分享
            $cordovaSocialSharing
                .shareViaFacebook(message, image, link)
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };
        $scope.shareViaSMS = function () {//通过短信分享
            // access multiple numbers in a string like: '0612345678,0687654321'
            $cordovaSocialSharing
                .shareViaSMS(message, number)
                .then(function (result) { // 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };
        $scope.shareViaEmail = function () { //通过Email分享
            // TO, CC, BCC must be an array, Files can be either null, string or array
            $cordovaSocialSharing
                .shareViaEmail(message, subject, toArr, bccArr, file)
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) { //失败回调
                    alert("err");
                });
        };
        $scope.canShareVia = function () {//通过分享
            $cordovaSocialSharing
                .canShareVia(socialType, message, image, link)
                .then(function (result) {// 成功回调!
                    alert("Success");
                }, function (err) {//失败回调
                    alert("err");
                });
        };
    });
