angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $stateParams, Chats) {
    $scope.chats = Chats.all();

    $scope.sheetData = [
    {
        name: "AiA",
        code: "AI101",
        limit: 25000,
        account: "Life Insurance"
    },
    {
        name: "Cargills",
        code: "CF001",
        limit: 30000,
        account: "Food City"
    }
    ];

    function add(index) {
        window.alert("Added: " + index);
    }

    $scope.add = add;


})

.controller('SearchCtrl', function ($scope, $stateParams, Chats, $ionicHistory, $window) {
    $scope.goBack = function () {
        $window.history.go(-1);
        //$ionicHistory.goBack();
    };
})

.controller('SearchDetailCtrl', function ($scope, $stateParams, Chats, $ionicHistory, $window) {
    $scope.goBack = function () {
        $window.history.go(-1);
        //$ionicHistory.goBack();
    };
})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})
.controller('CartCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('AccountCtrl', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/account/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });


    $scope.settings = {
        enableFriends: true
    };



});
