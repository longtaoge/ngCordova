angular.module('demo.file.ctrl', [])

  .controller('FileCtrl', function ($scope, $log, $cordovaFile) {


   /* document.addEventListener('deviceready', function () {
      $cordovaFile.checkDir("/directory").then(function (success) {
        console.log('success ' + JSON.stringify(success));
        $scope.isDir = success;
      }, function (error) {
        console.log('success ' + JSON.stringify(error));
        $scope.isDir = error;
      })
    })
*/

        document.addEventListener('deviceready', function () {

            $scope.checkdir=function(){
                // CHECK
                $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+error.toLocaleString());
                    });

            };
            $scope.checkFile=function(){
                $cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+error.toLocaleString());
                    });

            };
            $scope.createDir=function(){
                // CREATE
                $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error"+error.toLocaleString());
                    });

            };
            $scope.createFile=function(){
                $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });


            };
            $scope.removeDir=function(){

                // REMOVE
                $cordovaFile.removeDir(cordova.file.dataDirectory, "some_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.removeFile=function(){

                $cordovaFile.removeFile(cordova.file.dataDirectory, "some_file.txt")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.removeRecursively=function(){

                $cordovaFile.removeRecursively(cordova.file.dataDirectory, "")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });


            };
            $scope.writeFile=function(){

                // WRITE
                $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });


            };
            $scope.writeExistingFile=function(){
                $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });


            };
            $scope.readAsText=function(){

                // READ
                $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.moveDir=function(){

                // MOVE
                $cordovaFile.moveDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.moveFile=function(){

                $cordovaFile.moveFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory)
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.copyDir=function(){

                // COPY
                $cordovaFile.copyDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });

            };
            $scope.copyFile=function(){

                $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
                    .then(function (success) {
                        // success
                        alert("成功");
                    }, function (error) {
                        // error
                        alert("error");
                    });
            };

        });



    });
