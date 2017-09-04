'use strict';

angular.module('meu-pe',
  [
    'ionic',
    'meu-pe.services',
    'meu-pe.controllers',
    'meu-pe.directives',
    'meu-pe-components',
    'ngCookies',
    'ui-notification',
  ])

  .config(function ($ionicConfigProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
    $ionicConfigProvider.backButton.text('Voltar');
  })

  .config(function (NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 2500,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      replaceMessage: true,
      positionX: 'right',
      positionY: 'top'
    });
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (evt, toState) {
      $rootScope.isHideTab = toState.name === "signup" || toState.name === "signin";
    });
  })

angular.module('meu-pe.services', []);
angular.module('meu-pe.controllers', []);
angular.module('meu-pe.directives', []);