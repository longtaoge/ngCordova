angular.module('demo.imagepicker.ctrl', [])

  .controller('ImagepickerCtrl', function ($scope, $cordovaImagePicker) {
        $scope.getPicture=function(){
            var options = {
                maximumImagesCount: 5,//一次最多选择的图片数量
                width: 400,//宽度
                height: 400,//高度
                quality: 80//图片质量
            };
            $cordovaImagePicker.getPictures(options)//获取图片URL列表
                .then(function (results) {
                    $scope.pickerimage=results[0];//这里用来将图片显示在页面上
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                    }
                }, function(error) {
                    // error getting photos
                });
        };
  });
