angular.module('demo.progress.ctrl', ['ngCordova'])

    .controller('ProgressCtrl', function ($scope, $cordovaProgress,$timeout) {
        $scope.loadProgressIndicator = function (type) {
            switch (type) {
                case  'indeterminate-simple':
                    // ng-cordova 中的调用方法
                    $cordovaProgress.showSimple(true);
                    // 官方demo的调用方法
                    ProgressIndicator.showSimple(true);
                    timeout(5000);
                    break;
                case  'indeterminate-simple-then-hide':
                    ProgressIndicator.showSimple(true);
                    ProgressIndicator.hide();
                    break;
                case  'indeterminate-label':
                    ProgressIndicator.showSimpleWithLabel(false, 'custom Label');
                    timeout(5000);
                    break;
                case  'indeterminate-label-detail':
                    ProgressIndicator.showSimpleWithLabelDetail(false, 'custom Label', 'custom detail');
                    timeout(5000);
                    break;
                case  'determinate-simple':
                    ProgressIndicator.showDeterminate(false);
                    break;
                case  'determinate-simple-label':
                    ProgressIndicator.showDeterminateWithLabel(false, 100000, 'custom label');
                    break;
                case  'determinate-annular':
                    ProgressIndicator.showAnnular(false);
                    break;
                case  'determinate-annular-label':
                    ProgressIndicator.showAnnularWithLabel(false, 50000, 'custom label');
                    break;
                case  'determinate-bar':
                    ProgressIndicator.showBar(false, 100000);
                    break;
                case  'determinate-bar-label':
                    ProgressIndicator.showBarWithLabel(false, 100000, 'custom label');
                    break;
                case 'success':
                    ProgressIndicator.showSuccess(false, 'success');
                    timeout(5000);
                    break;
                case 'text-top':
                    ProgressIndicator.showText(false, 'text at the TOP', 'top');
                    timeout(5000);
                    break;
                case 'text-bottom':
                    ProgressIndicator.showText(false, 'text at the BOTTOM', 'bottom');
                    timeout(5000);
                    break;
            }

            function timeout(time) {
                $timeout(function () {
                    ProgressIndicator.hide();
                }, time);

            }
        }

    });
