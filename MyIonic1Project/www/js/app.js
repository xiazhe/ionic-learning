// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })
    .state('search', {
        url: '/search',
        templateUrl: 'templates/dash/search.html',
        controller: 'SearchCtrl'
    })
   .state('search-detail', {
        url: '/search-detail',
        templateUrl: 'templates/dash/search-detail.html',
        controller: 'SearchDetailCtrl'
    })
    .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
      .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
              'tab-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
              }
          }
      })
    .state('tab.cart', {
        url: '/cart',
        views: {
            'tab-cart': {
                templateUrl: 'templates/tab-cart.html',
                controller: 'CartCtrl'
            }
        }
    })
    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

})
.config(['$ionicConfigProvider', function ($ionicConfigProvider) {
    //Place ionic tabs at the botoom of the screen
    //http://ionicframework.com/docs/api/provider/%24ionicConfigProvider/
    //http://stackoverflow.com/questions/27874855/how-to-place-ionic-tabs-at-the-bottom-of-the-screen
    //https://github.com/driftyco/ionic/issues/2749
    $ionicConfigProvider.tabs.position('bottom'); // Places them at the bottom for all OS
    $ionicConfigProvider.tabs.style("standard"); // Makes them all look the same across all OS
    $ionicConfigProvider.scrolling.jsScrolling(true);

    $ionicConfigProvider.views.transition('platform');
    $ionicConfigProvider.navBar.transition('platform');


    $ionicConfigProvider.views.maxCache(10);

}]);
