angular.module('demo.contacts.ctrl', [])

    .controller('ContactsCtrl', function ($scope, $log, $cordovaContacts) {

        $scope.pickContact = function () {
            document.addEventListener("deviceready", function () {
                $cordovaContacts.pickContact().then(function (result) {//选择联系人
                    console.log(JSON.stringify(result));
                    $scope.selectedContact = result;
                })
            }, false);
        };

        $scope.saveContact = function (contact) {//创建联系人
            document.addEventListener("deviceready", function () {
                $cordovaContacts.save(contact).then(function (result) {
                    // $scope.newContact=(JSON.stringify(result)+"");
                    alert(JSON.stringify(result));
                })
            }, false);
        };

        $scope.removeContact = function (contact) {//删除联系人
            document.addEventListener("deviceready", function () {
                $cordovaContacts.remove(contact).then(function (result) {
                    console.log(JSON.stringify(result));
                    alert(JSON.stringify(result));
                })
            }, false);
        };
        $scope.find = function () {
            onSuccess = function (contacts) {
                alert('Found ' + contacts.length + ' contacts.');
            };
            onError = function (contactError) {
                alert('onError!');
            };
            // 查找所有姓名中包含"阿"字段的联系人
            var options = new ContactFindOptions();
            options.filter = "阿";//过滤字段
            options.multiple = true;
            options.desiredFields = [navigator.contacts.fieldType.id];
            var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
            navigator.contacts.find(fields, onSuccess, onError, options);
        }
    });
