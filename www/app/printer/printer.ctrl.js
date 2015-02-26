angular.module('demo.printer.ctrl', [])

    .controller('PrinterCtrl', function ($scope, $log, $cordovaPrinter) {/*$cordovaPreferences*/
        var printerAvail = $cordovaPrinter.isAvailable();
        alert("printerAvail=" + printerAvail.name);
        var doc = "<html> ...PrenterTest </html>";
        $scope.printerTest = function () {
            try {
                $cordovaPrinter.print(doc);//向打印机发送打印信息
            }catch(err){
            } finally{

            }
        };
    });
