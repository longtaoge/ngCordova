angular.module('demo.camera.ctrl', [])

  .controller('CameraCtrl', function ($scope, $cordovaCamera) {
    $scope.takePicture = function () {

          var options = { /*调用相机时的可选参*/
              quality: 50,//所保存的图像质量等级，范围为0 - 100
              destinationType: Camera.DestinationType.DATA_URL,//  返回值的格式destinationtype  这个值的意思是Base64编码的字符串
              sourceType: Camera.PictureSourceType.CAMERA,//图片来源，这个值是指从摄像头获取
              allowEdit: true,// 是否允许选择图像前简单编辑
              encodingType:    Camera.ALLMEDIA,     //Camera.EncodingType.JPEG,// 图片的格式
              targetWidth: 500, //图像宽度（像素）
              targetHeight: 500,//图像高度（像素）
            //  popoverOptions: CameraPopoverOptions,//指定位置的选项 只有ios支持
              saveToPhotoAlbum: false, //是否保存到设备的相册
              cameraDirection:1 //前后摄像头选项 0为后似乎不起作用
              // mediaType  //	媒体类型
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ' + message);
      });
    };
  });
