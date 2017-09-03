'use strict';

angular.module('meu-pe',
  [
    'ionic',
    'meu-pe.services',
    'meu-pe.controllers',
    'meu-pe.directives',
    'meu-pe-components',
  ])

  .config(function($ionicConfigProvider, $sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
    $ionicConfigProvider.backButton.text('Voltar');
  })
  
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

angular.module('meu-pe.services', []);
angular.module('meu-pe.controllers', []);
angular.module('meu-pe.directives', []);